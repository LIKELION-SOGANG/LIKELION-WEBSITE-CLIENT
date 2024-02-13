import React from 'react';
import styled from 'styled-components';
import { useMousePosition } from '../../util/MouseContextProvider';
import { motion } from 'framer-motion';

const NewApplication = ({ onNewApplication }) => {
  const { textEnter, textLeave } = useMousePosition();

  return (
    <div>
      <Text>처음 지원서를 작성하신다면,</Text>
      <Button
        onClick={onNewApplication}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        <ButtonText>지원서 생성하기</ButtonText>
      </Button>
    </div>
  );
};

const Text = styled.div`
  color: var(--Main, #000);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3rem;
  margin-bottom: 1.2rem;
`;

const Button = styled(motion.button)`
  width: 56.2rem;
  height: 5rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid var(--Main, #000);
  background: var(--Main, #000);
`;

const ButtonText = styled.div`
  width: 30.5rem;
  height: 1.9rem;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export default NewApplication;
