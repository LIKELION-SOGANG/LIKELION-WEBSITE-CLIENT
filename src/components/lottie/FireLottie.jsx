import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import firework from '../../assets/lottie/firework.json';
import styled from 'styled-components';
function FireLottie({ adjustZIndex }) {
  useEffect(() => {}, []);
  return (
    <LottieContainer $isUnder={adjustZIndex}>
      <div style={{ width: '50%' }}>
        <Lottie animationData={firework} loop={false}></Lottie>
      </div>
    </LottieContainer>
  );
}
const LottieContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${(props) => (props.$isUnder ? 0 : 10000)};
  display: flex;
  justify-content: center;
`;
export default FireLottie;
