import React from 'react';
import Router from './Router';
import styled from 'styled-components';
import { GlobalStyles } from './style/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppContainer>
        <Router />
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  overflow: hidden;
`;

export default App;
