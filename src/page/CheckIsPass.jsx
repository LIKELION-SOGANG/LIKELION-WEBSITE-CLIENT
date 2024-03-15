import React, { useState } from 'react';
import TopBanner from '../components/Recruit/TopBanner';
import { ApplyContainer } from './Apply';
import styled from 'styled-components';
import { useMousePosition } from '../util/MouseContextProvider';
import { motion } from 'framer-motion';
import { instance } from '../api/axios';
import { ReactComponent as LikeLionLogo } from '../assets/icon/likelion-grey.svg';
import Space from '../util/Space';
import { Canvas } from '@react-three/fiber';
import Sogang3d from '../components/about/Sogang3d';
import FireLottie from '../components/lottie/FireLottie';
import useMediaQuery from '../hooks/useMediaQuery';

function CheckIsPass() {
  const { textEnter, textLeave } = useMousePosition();
  const [text, setText] = useState('');
  const [isViewResult, setIsViewResult] = useState(false);
  const [isViewCongratulation, setIsViewCongratulation] = useState(false);
  const [isPass, setIsPass] = useState(false);
  const [name, setName] = useState('');
  const isMobileScreen = useMediaQuery('(max-width: 768px)');
  const [isDisplayCongratulationMobile, setIsDisplayCongratulationMobile] =
    useState(true);
  const handleClickButton = async () => {
    if (text.length !== 36) {
      return;
    }
    try {
      const res = await instance.get(`application/${text}/result`);
      if (res?.status === 200) {
        setIsViewResult(true);
        setName(res?.data?.name);
        setIsPass(res?.data?.isPass);
        setTimeout(() => {
          setIsViewCongratulation(true);
        }, 300);
        if (isMobileScreen) {
          setTimeout(() => {
            setIsDisplayCongratulationMobile(false);
          }, 3000);
        }
      }
    } catch (err) {
      alert('고유 번호를 잘못 입력하셨습니다.');
    }
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
      {isPass && <FireLottie />}
      <CheckPassContainer $isView={isViewResult}>
        {isViewResult ? (
          <>
            {!isMobileScreen && <Space height={'13.84rem'} />}

            <LikeLionLogoImg
              style={{
                transition: 'opacity 3s ease',
                opacity: isViewCongratulation ? 1 : !isPass ? 1 : 0,
              }}
            />
            <Space height={'3.84rem'} />
            {isPass ? (
              <CongratulationSection
                style={{
                  transition: 'opacity 3s ease',
                  opacity: isViewCongratulation ? 1 : 0,
                }}
              >
                {isMobileScreen && isDisplayCongratulationMobile && (
                  <CanvasContainer>
                    <Canvas
                      camera={{ near: 20, far: 100, position: [7, 7, 0] }}
                    >
                      <Sogang3d />
                    </Canvas>
                  </CanvasContainer>
                )}
                {!isMobileScreen && (
                  <CanvasContainer>
                    <Canvas
                      camera={{ near: 20, far: 100, position: [7, 7, 0] }}
                    >
                      <Sogang3d />
                    </Canvas>
                  </CanvasContainer>
                )}

                <Congratulation>
                  {name} 님, 멋쟁이사자처럼 서강대학교 12기 <br /> 최종 합격을
                  축하드려요!
                </Congratulation>
                <Space height={'3.84rem'} />
                <공지사항>
                  안녕하세요, 멋쟁이사자처럼 서강대학교 12기 운영진입니다.
                  <br />
                  12기 멋쟁이사자처럼 서강대학교 [최종 합격]을 축하드립니다.
                  <br />
                  <br />
                  그럼 12기 아기사자 활동을 시작하기에 앞서 첫 번째 공지사항
                  전달드립니다.
                  <br />
                  1. 정규 세션시간: 매주 화요일 / 금요일 19:00~21:00
                  <br />
                  <br />
                  2. 오리엔테이션: 3월 19일 (화요일) 19:00 마포 프론트원 - 공덕
                  ICT COC
                  <br />
                  <br />
                  3. 강의 자료, 과제 등의 업로드는 Notion과 Github를 사용합니다.
                  Notion에 가입해주시고, Notion에 가입 이메일을 아래 구글폼에
                  적어서 제출해주시기 바랍니다.
                  <br />
                  <br />
                  4. 멋쟁이사자처럼 서강대학교는 회칙 제 11조에 따라 본회의 유지
                  및 운영에 필요한 경비 5만원을 회비로 정하고 있습니다.
                  <br />
                  <br /> 12기 총무계좌는 아래와 같습니다. <br />
                  3333291762013 카카오뱅크 정고은
                  <br />
                  <br />
                  5. 멋쟁이사자처럼 12기 회원 정보를 수합합니다. 추가로 회비
                  입금 내역, 이후 일정 참가에 {!isMobileScreen && <br />}
                  대하여 아래 구글폼을 입력해주시면 감사하겠습니다. 구글폼은
                  3/19(일) 오전 11:59(정오)까지 제출 부탁드립니다.
                  <br />
                  <br />
                  <a href="https://forms.gle/YrDqQ1rSX3UBfvPh8" target="blank">
                    <b>https://forms.gle/YrDqQ1rSX3UBfvPh8</b>
                  </a>
                  <br />
                  <br />
                  다시 한번 멋쟁이사자처럼 서강대학교의 일원이 되신 것을
                  축하드리며, 앞으로 여러분과 함께 하게 될 수많은 시간들을
                  기대하고 있겠습니다! <br />
                  <br />
                  🦁 POSSIBILITY TO REALITY 🦁
                </공지사항>
                <Space height={'10rem'} />
              </CongratulationSection>
            ) : (
              <>
                <Congratulation>
                  멋쟁이사자처럼 서강대학교에서 <br /> {name} 님의 전형 결과를
                  안내드립니다.
                </Congratulation>
                <Space height={'3.84rem'} />
                <FailMessage>
                  안녕하세요, 멋쟁이사자처럼 서강대학교 12기 운영진입니다.
                  <br /> 우선 멋쟁이사자처럼 서강대학교에 많은 관심을 보내주셔서
                  감사합니다.
                  <br />
                  <br />
                  제한된 선발 인원으로 인해 <br /> 이번에는 아쉽게도 좋은 소식을
                  전하지 못하게 되었습니다.
                  <br /> 좋은 역량을 가지신 분임에도 불구하고,
                  <br /> 불합격 소식을 알려 드리게 되어 무거운 마음입니다.
                  <br />
                  <br />
                  귀한 시간 내어 지원해주셔서 감사드리고,
                  <br /> 다음 기회에 더 좋은 인연으로 함께할 수 있기를 진심으로
                  바라겠습니다.
                  <br />
                  <br /> 감사합니다.
                </FailMessage>
                <Space height={'10rem'} />
              </>
            )}
          </>
        ) : (
          <>
            <Space height="10rem" />
            <Input
              type="text"
              placeholder="이메일로 발송된 고유 번호를 입력해주세요."
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              style={{ fontSize: '1.5rem' }}
            />
            <Button
              isValid={text?.length === 36}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              onClick={handleClickButton}
            >
              <ButtonText>최종 합격 여부 확인하기</ButtonText>
            </Button>
          </>
        )}
      </CheckPassContainer>
    </motion.div>
  );
}
const CanvasContainer = styled.div`
  position: fixed;
  top: 10rem;
  left: 0;
  width: 100vw;
  height: calc(100vh);
  z-index: 1;
  display: ${(props) => (props.$isDisplayNone ? 'none' : 'block')};
`;

const CongratulationSection = styled.section`
  transition: opacity 3s ease;
  opacity:;
`;

const LikeLionLogoImg = styled(LikeLionLogo)`
  width: 22rem;
`;

const 공지사항 = styled.div`
  color: #000;
  position: relative;
  z-index: 999;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.6rem;
  width: 56.2rem;
  margin: 0 auto;
  font-style: normal;
  font-weight: 500;
  line-height: 2.3rem; /* 143.75% */
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.2rem;
    padding: 1.5rem;
  }
`;
const CheckPassContainer = styled(ApplyContainer)`
  overflow: scroll;
  position: relative;
  z-index: 100000;
`;

const TopBannerWrapper = styled.div`
  width: 100%;
  z-index: 9999;
  position: relative;
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
    outline: none;
  }
  @media (max-width: 768px) {
    width: calc(100% - 4rem);
    margin: 1rem auto;
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
  @media (max-width: 768px) {
    width: calc(100% - 4rem);
    margin: 0 auto;
  }
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
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FailMessage = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.3rem; /* 143.75% */
  text-transform: capitalize;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export default CheckIsPass;
