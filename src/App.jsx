import React, { useEffect } from 'react';
import Router from './Router';
import styled from 'styled-components';
import { GlobalStyles } from './style/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import Cursor from './util/Cursor';
import { MouseContextProvider } from './util/MouseContextProvider';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <MouseContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Cursor />
        <AppContainer>
          <Router />
        </AppContainer>
      </BrowserRouter>
    </MouseContextProvider>
  );
}

const AppContainer = styled.div``;

export default App;
