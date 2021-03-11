import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../pages/Register';
import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Splash from '../pages/Splash'
import { useAuth } from '../hooks/auth'

const App = createStackNavigator()

const Routes: React.FC = () => {
  const { user, isLoading } = useAuth()
  return (
    <App.Navigator screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' }
    }}>
      {
        isLoading ? (
          <App.Screen name='Splash' component={Splash} />
        ) :
          user ? (
            <>
              <App.Screen name='Dashboard' component={Dashboard} />
              <App.Screen name='Profile' component={Profile} />
            </>
          ) : (
            <>
              <App.Screen name='SignIn' component={SignIn} />
              <App.Screen name='Register' component={Register} />
            </>
          )
      }
    </App.Navigator>
  )
}

export default Routes