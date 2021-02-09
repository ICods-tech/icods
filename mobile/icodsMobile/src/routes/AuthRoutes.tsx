import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../pages/Register';
import SignIn from '../pages/SignIn'

const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' }
    }}>
      <Auth.Screen name='SignIn' component={SignIn} />
      <Auth.Screen name='Register' component={Register} />
    </Auth.Navigator>
  )
}

export default AuthRoutes