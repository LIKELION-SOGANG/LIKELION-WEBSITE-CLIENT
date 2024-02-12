import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/icon/mark.png';
import useStore from './Store';
import { useNavigate } from 'react-router-dom';
const Finish = () => {
  const { name, email, submitTime, setCurrentStep } = useStore();
  const navigate = useNavigate();
  return (
    <FinishContainer>
      <Image src={logo} alt="end-logo" />
      <FinishText>{name}님, 지원서 저장이 완료되었습니다.</FinishText>
      <Text>
        {email}로 발송된 고유 번호를 입력하여 지원서를 수정할 수 있습니다.
      </Text>
      <Text>이메일이 오지 않은 경우, 스팸 메일함도 확인해주세요.</Text>
      <Time>최종 제출 시각: {submitTime}</Time>
      <HomeButton
        onClick={() => {
          setCurrentStep(0);
        }}
      >
        지원서 수정하기
      </HomeButton>
    </FinishContainer>
  );
};

const FinishContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  width: 13rem;
  height: 8.9rem;
  margin-top: 20rem;
  margin-bottom: 3.5rem;
`;
const TextBase = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-weight: 600;
  // line-height: 200%;
  margin-bottom: 1rem;
`;
const FinishText = styled(TextBase)`
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;
const Text = styled(TextBase)`
  color: #424242;
  font-size: 1.2rem;
  white-space: pre-line;
`;
const Time = styled(TextBase)`
  color: #b7b7b7;
  font-size: 1.2rem;
  margin-top: 0.2rem;
`;

const HomeButton = styled.button`
  display: inline-flex;
  padding: 0.6rem 1.3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #b7b7b7;
  font-family: Pretendard;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 2rem;
  background: #f4f4f4;
  margin-top: 6rem;
`;
export default Finish;
