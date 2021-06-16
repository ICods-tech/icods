import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './routes'
import { View, Text, StatusBar } from 'react-native'
import Register from './pages/Register';
import AppProvider from './hooks'
import Toast, { BaseToast } from 'react-native-toast-message';

const toastConfig = {
  success: ({ text1, text2, ...rest }: {text1: string, text2: string}) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: 'pink' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 12,
        fontWeight: 'bold'
      }}
      text1={text1}
      text1NumberOfLines={1}
      text2NumberOfLines={ 0}
      // text2={null}
    />
  ),
  error: ({ text1, text2, ...rest }: {text1: string, text2: string}) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: 'red' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 12,
        fontWeight: 'bold'
      }}
      text1={text1}
      
      text1NumberOfLines={1}
      text2NumberOfLines={ 0}
      // text2={null}
    />
  )
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='#312e38'/>
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <AppProvider>
        <Routes/>
        </AppProvider>
      </View>
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  )
}

export default App;
