import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Loading = ({ progress }) => {
  const progressNormalized = progress / 100;
  const backgroundColor = `rgb(${255 * progressNormalized}, ${255 * progressNormalized}, ${255 * progressNormalized})`;

  return (
    <StyledLoadingScreen
      animate={{ y: '0vh' }}
      exit={{ y: '100vh' }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor }}
    >
      <h1 style={{ mixBlendMode: 'difference' }}>{progress}%</h1>
    </StyledLoadingScreen>
  );
};

const StyledLoadingScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: right;
  align-items: center;
  color: white;
  padding-right: 10vw;
  font-family: 'PP-Editorial';
  font-size: 8vw;
  z-index: 9000;
`;

export default Loading;
