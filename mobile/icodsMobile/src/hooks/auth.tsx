import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import api from '../services/api'
import AsyncStorage from '@react-native-community/async-storage'

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  visibility: boolean;
}

interface AuthState {
  user: User;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  token: string;
  isLoading: boolean;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signUp: (credentials: SignUpCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser(user: User): void;
  alterProfileVisibility: (id: string, token: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function loadStoredData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet(['@ICods:token', '@ICods:user'])

      if (token[1] && user[1]) {
        setData({ token: JSON.parse(token[1]), user: JSON.parse(user[1]) })
      }
    }

    setIsLoading(false)
    loadStoredData()
  }, [])

  const signIn = useCallback(async (credentials: SignInCredentials) => {
    try {
      const { email, password } = credentials;
      console.log(email, password)
      const res = await api.post('signin', {
        email,
        password
      })

      const { token, user } = res.data

      await AsyncStorage.multiSet([
        ['@ICods:token', token],
        ['@ICods:user', JSON.stringify(user)],
      ])
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({ token, user })
    } catch (err) {
      console.log("err.message")
      throw new Error('User is not Authenticated')
    }
  }, [])

  const signUp = useCallback(async (credentials: SignUpCredentials) => {
    try {
      const { name, username, email, password } = credentials;

      await api.post('signup', {
        name,
        username,
        email,
        password
      })
    } catch (err) {
      console.log(err.message)
      throw new Error(err)
    }
  }, [])

  const signOut = useCallback(async () => {
    console.log('signing out')
    await AsyncStorage.multiRemove(['@ICods:token', '@ICods:user'])

    setData({} as AuthState)
  }, [])

  const alterProfileVisibility = useCallback(async (id: string, token: string) => {
    try {
      const res = await api.patch('changeVisibility', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const user = res.data

      await updateUser(user)
    } catch (err) {
      throw new Error(err)
    }
  }, [])

  const updateUser = useCallback(async (updatedUser: User) => {
    AsyncStorage.setItem('@ICods:user', JSON.stringify(updatedUser));
    const token = data.token
    setData({
      token,
      user: {
        ...updatedUser
      }
    })

    console.log(data)
  }, [data])

  return (
    <AuthContext.Provider value={{
      user: data.user,
      signIn,
      signUp,
      token: data.token,
      signOut,
      isLoading,
      updateUser,
      alterProfileVisibility
    }}>
      {children}
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