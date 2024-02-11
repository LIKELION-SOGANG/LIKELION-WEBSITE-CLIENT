import React, { useEffect, useState } from 'react';
import Router from './Router';
import styled from 'styled-components';
import { GlobalStyles } from './style/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import Cursor from './util/Cursor';
import { MouseContextProvider } from './util/MouseContextProvider';
import Loading from './page/Loading';
import { AnimatePresence } from 'framer-motion';
import { instance } from './api/axios';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLoading && loadingProgress < 100) {
      const timer = setTimeout(() => {
        setLoadingProgress((prev) => Math.min(prev + 1, 100)); // 10%씩 증가
      }, 10); // 0.5초마다 업데이트

      return () => clearTimeout(timer); // 컴포넌트가 unmount될 때 타이머 제거
    } else if (loadingProgress === 100) {
      setTimeout(() => setIsLoading(false), 1000);
      instance.post('visit/');
    }
  }, [isLoading, loadingProgress]);

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

const AppContainer = styled.div``;

export default App;
