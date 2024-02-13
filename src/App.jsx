import React, { useEffect } from 'react';
import Router from './Router';
import styled from 'styled-components';
import { GlobalStyles } from './style/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import Cursor from './util/Cursor';
import { MouseContextProvider } from './util/MouseContextProvider';
import Loading from './page/Loading';
import { AnimatePresence } from 'framer-motion';
import { instance } from './api/axios';
import useLoading from './hooks/useLoading';

function App() {
  const { isLoading, loadingProgress } = useLoading();
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

const AppContainer = styled.div`
  overflow: hidden;
`;

export default App;
