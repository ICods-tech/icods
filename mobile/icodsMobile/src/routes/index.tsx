import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../pages/Register';
import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import EditProfile from '../pages/EditProfile'
import Splash from '../pages/Splash'
import { useAuth } from '../hooks/auth'
import History from '../pages/History';
import Support from '../pages/Support'
import QRCodeHistoryDetails from '../pages/QRCodeHistoryDetails';
import VideoPlayer from '../pages/VideoPlayer';
import Scanner from '../pages/Scanner';
import Editor from '../pages/Editor';

const App = createStackNavigator()

const Routes: React.FC = () => {
  const { user, token, isLoading } = useAuth()

  return (
    <App.Navigator screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' }
    }}>
      {
        isLoading ? (
          <App.Screen name='Splash' component={Splash} />
        ) :
          user ? (
            <>
              <App.Screen name='Dashboard' component={Dashboard} />
              <App.Screen name='Profile' component={Profile} />
              <App.Screen name='EditProfile' component={EditProfile} />
              <App.Screen name='History' component={History} />
              <App.Screen name='QRCodeHistoryDetails' component={QRCodeHistoryDetails} />
              <App.Screen name='Support' component={Support} />
              <App.Screen name='Editor' component={ Editor } />
              <App.Screen name='Scanner' component={ Scanner } />
              <App.Screen name='VideoPlayer' component={ VideoPlayer } />
            </>
          ) : (
              <>
                <App.Screen name='VideoPlayer' component={ VideoPlayer } />
              <App.Screen name='SignIn' component={SignIn} />
              <App.Screen name='Register' component={Register} />
                <App.Screen name='Scanner' component={ Scanner } />
            </>
          )
      }
    </App.Navigator>
  )
}

export default Routes