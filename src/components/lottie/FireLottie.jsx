import React from 'react';
import Lottie from 'lottie-react';
import firework from '../../assets/lottie/firework.json';
import styled from 'styled-components';
function FireLottie() {
  return (
    <LottieContainer>
      <Lottie animationData={firework}></Lottie>
    </LottieContainer>
  );
}

const LottieContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;
export default FireLottie;
