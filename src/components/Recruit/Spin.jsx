import React from 'react';
import spin from '../../assets/icon/Spinner.json';
import Lottie from 'react-lottie';
import styled from 'styled-components';
const Spin = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spin,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Wrapper>
      <Lottie options={defaultOptions} height={200} width={200} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 5rem;
  //   top: 42.5%;
  //   left: 42.5%;
  z-index: 1000;
`;

export default Spin;
