import React, { useEffect, useRef } from 'react';
import animation from '../../assets/icon/Animation.json';
import Lottie from 'react-lottie';

const ScrollDownAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={130} width={50} />
    </div>
  );
};

export default ScrollDownAnimation;
