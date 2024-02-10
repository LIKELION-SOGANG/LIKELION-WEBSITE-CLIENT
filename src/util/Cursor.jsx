//Cursor.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useMousePosition } from './MouseContextProvider';

const Cursor = () => {
  const { hoverNav, variants } = useMousePosition();

  return (
    <StyledCursor
      animate={hoverNav}
      transition={{ ease: 'linear', duration: 0.15 }}
      variants={variants}
    />
  );
};

const StyledCursor = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

export default Cursor;
