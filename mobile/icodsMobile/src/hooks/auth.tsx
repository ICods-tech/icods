import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import api from '../services/api'
import AsyncStorage from '@react-native-community/async-storage'

interface User {
  id: string;
  name: string;
  email: string;
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

export interface Follow {
  followingUsers: User[],
  followingCount: Number
}

export interface Followers {
  followerUsers: User[],
  followersCount: Number
}

interface AuthContextData {
  user: User;
  token: string;
  isLoading: boolean;
  getFollowing: (id: string, token: string) => Promise<Follow>;
  getFollowers: (id: string, token: string) => Promise<Followers>;
  signIn: (credentials: SignInCredentials) => Promise<void>;
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
        setData({ token: token[1], user: JSON.parse(user[1]) })
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
        ['@ICods:user', JSON.stringify(user)]
      ])

      api.defaults.headers.authorization = `Bearer ${token}`

      setData({ token, user })
    } catch (err) {
      console.log("err.message")
      throw new Error('User is not Authenticated')
    }
  }, [])

  const getFollowing = useCallback(async (id: string, token: string) => {
    try {
      const res = await api.get('follow', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const { followingUsers, followingCount } = res.data

      return {
        followingUsers,
        followingCount
      }
    } catch (err) {
      console.log("err.message")
      throw new Error('User is not Authenticated')
    }
  }, [])

  const getFollowers = useCallback(async (id: string, token: string) => {
    try {
      const res = await api.get('followers', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log(res.data)

      const { followerUsers, followersCount } = res.data

      return {
        followerUsers,
        followersCount
      }
    } catch (err) {
      throw new Error(err.message)
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

      updateUser(user)

    } catch (err) {
      console.log("err.message")
      throw new Error('User is not Authenticated')
    }
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
    <AuthContext.Provider value={{
      user: data.user,
      signIn,
      token: data.token,
      signOut,
      getFollowing,
      getFollowers,
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