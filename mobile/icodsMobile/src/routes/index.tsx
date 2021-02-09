import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useAuth } from '../hooks/auth'
import AppRoutes from './AppRoutes'
import AuthRoutes from './AuthRoutes'

const Auth = createStackNavigator()

const Routes: React.FC = () => {
  const {user} = useAuth()
  return (
    <Auth.Navigator screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' }
    }}>
    {user ? <AppRoutes/> : <AuthRoutes/>} 
    </Auth.Navigator>
  )
}

export default AuthRoutes