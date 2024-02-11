import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/icon/mark.png';
import useStore from './Store';
const Finish = () => {
  const { name, email, submitTime } = useStore();
  return (
    <FinishContainer>
      <Image src={logo} alt="end-logo" />
      <FinishText>{name}님, 지원서 저장이 완료되었습니다.</FinishText>
      <Text>
        {email}로 발송된 고유 번호를 입력하여 지원서를 수정할 수 있습니다.
      </Text>
      <Time>최종 제출 시각: {submitTime}</Time>
      <HomeButton>지원서 수정하기</HomeButton>
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
  margin-top: 7rem;
`;
const TextBase = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 300%;
`;
const FinishText = styled(TextBase)`
  font-weight: 700;
  font-size: 1.6rem;
`;
const Text = styled(TextBase)`
  color: #424242;
  font-size: 1.2rem;
`;
const Time = styled(TextBase)`
  color: #b7b7b7;
  font-size: 1.2rem;
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
`;
export default Finish;
