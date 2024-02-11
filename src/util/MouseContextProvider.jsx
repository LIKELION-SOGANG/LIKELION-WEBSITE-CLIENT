import React, { createContext, useContext, useEffect, useState } from 'react';

const MousePosition = createContext();
export const useMousePosition = () => useContext(MousePosition);

export const MouseContextProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverNav, setHoverNav] = useState('default');

  const variants = {
    default: {
      top: mousePosition.y,
      left: mousePosition.x,
      x: '-50%',
      y: '-50%',
    },
    text: {
      height: '60px',
      width: '60px',
      top: mousePosition.y,
      left: mousePosition.x,
      x: '-70%',
      y: '-70%',
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    },
  };

  const textEnter = () => setHoverNav('text');
  const textLeave = () => setHoverNav('default');

  useEffect(() => {
    const handlePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handlePosition);

    return () => window.removeEventListener('mousemove', handlePosition);
  }, []);

  const value = {
    variants,
    textEnter,
    textLeave,
    hoverNav,
  };

  return (
    <MousePosition.Provider value={value}> {children} </MousePosition.Provider>
  );
};
