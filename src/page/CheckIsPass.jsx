import React, { useState } from 'react';
import TopBanner from '../components/Recruit/TopBanner';
import { ApplyContainer } from './Apply';
import styled from 'styled-components';
import { useMousePosition } from '../util/MouseContextProvider';
import { motion } from 'framer-motion';
import { instance } from '../api/axios';
import { ReactComponent as LikeLionLogo } from '../assets/icon/likelion-grey.svg';
import Space from '../util/Space';
function CheckIsPass() {
  const { textEnter, textLeave } = useMousePosition();
  const [text, setText] = useState('');
  const [isViewResult, setIsViewResult] = useState(true);
  const [isPass, setIsPass] = useState(true);
  const handleClickNumber = async () => {
    await instance.get(`application/${text}/result`);
    setIsViewResult(true);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <TopBannerWrapper>
        <TopBanner />
      </TopBannerWrapper>

      <CheckPassContainer>
        {isViewResult ? (
          <>
            <LikeLionLogo />
            <Space height={'3.84rem'} />
            {isPass ? (
              <>
                <Congratulation>
                  멋쟁이사자처럼 서강대학교 12기 <br /> 최종 합격을 축하드려요!
                </Congratulation>
                <Space height={'3.84rem'} />
                <SubText>
                  축하합니다, 이선명 님! <br /> 12기 아기사자가 된 것을
                  환영해요.
                </SubText>
              </>
            ) : (
              <>
                <Congratulation>
                  멋쟁이사자처럼 서강대학교에서 <br /> 이선명 님의 전형 결과를
                  안내드립니다.
                </Congratulation>
                <Space height={'3.84rem'} />
                <SubText>
                  이선명 님께서 그동안 해오신 경험들을 꼼꼼히 검토하였습니다만,
                  <br />
                  아쉽게도 이번에는 합격 소식을 전해 드리지 못하게 되었습니다.
                  <br />
                  소중한 시간 내어 멋사 서강대 12기에 지원해주셔서 진심으로
                  감사드립니다.
                  <br />
                  <br /> 멋쟁이사자처럼 서강대학교 12기 임원진 드림
                </SubText>
              </>
            )}
          </>
        ) : (
          <>
            {' '}
            <Input
              type="text"
              placeholder="이메일로 발송된 고유 번호를 입력해주세요."
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              style={{ fontSize: '1.5rem' }}
            />
            <Button isValid={text?.length > 0}>
              <ButtonText onMouseEnter={textEnter} onMouseLeave={textLeave}>
                최종 합격 여부 확인하기
              </ButtonText>
            </Button>
          </>
        )}
      </CheckPassContainer>
    </motion.div>
  );
}

const CheckPassContainer = styled(ApplyContainer)`
  height: calc(100vh - 2.75rem);
`;

const TopBannerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 56.2rem;
  height: 5rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid #b7b7b7;
  margin-bottom: 1.2rem;
  padding: 1.4rem;
  ::placeholder {
    color: #d9d9d9;
  }
  &:focus {
    border-color: black;
    outline: none;
  }
`;

const Button = styled(motion.button)`
  width: 56.2rem;
  height: 5rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background: ${({ isValid }) => (isValid ? 'black' : '#d9d9d9')};
  cursor: ${({ isValid }) => (isValid ? 'pointer' : 'none')};
  margin-bottom: 1.2rem;
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

const Congratulation = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;

const SubText = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.3rem; /* 143.75% */
  text-transform: capitalize;
`;
export default CheckIsPass;
