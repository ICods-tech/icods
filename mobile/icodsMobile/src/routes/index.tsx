import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../pages/Register';

const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' }
    }}>
      <Auth.Screen name='Register' component={Register}/>
    </Auth.Navigator>
  )
}

export default AuthRoutes