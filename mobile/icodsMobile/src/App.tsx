import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './routes'
import { View, Text, StatusBar } from 'react-native'
import Register from './pages/Register';


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='#312e38'/>
      <View style={{ flex: 1, backgroundColor: '#312e38'}}>
        <Routes/>
      </View>
    </NavigationContainer>
  )
}

export default App;
