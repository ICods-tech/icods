import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/global'
import Routes from './routes'
import AppProvider from './hooks'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
