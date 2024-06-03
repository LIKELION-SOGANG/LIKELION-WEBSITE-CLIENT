import React, { useCallback, useEffect, useState } from 'react';
import Router from './Router';
import styled from 'styled-components';
import { GlobalStyles } from './style/GlobalStyles';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import Cursor from './util/Cursor';
import { MouseContextProvider } from './util/MouseContextProvider';
import Loading from './page/Loading';
import { AnimatePresence } from 'framer-motion';
import { instance } from './api/axios';
import useLoading from './hooks/useLoading';
function App() {
  const { isLoading, loadingProgress } = useLoading();
  useEffect(() => {
    instance.post('visit/');
    blockOtherPage();
  }, []);

  const blockOtherPage = useCallback(() => {
    const path = window.location.pathname;
    if (path === '/') return;
    else {
      alert('현재 홈페이지 리모델링 작업중입니다. 🦁');
      window.location.href='https://www.likelionsg.site/';
    }
  }, []);

  return (
    <MouseContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Cursor />
        <AppContainer>
          <AnimatePresence>
            {isLoading && <Loading progress={loadingProgress} />}
          </AnimatePresence>
          <Router />
        </AppContainer>
      </BrowserRouter>
    </MouseContextProvider>
  );
}

const AppContainer = styled.div`
  overflow: hidden;
  position: relative;
  ::selection {
    background-color: rgba(100, 100, 100, 0.5);
  }
`;
export default App;
