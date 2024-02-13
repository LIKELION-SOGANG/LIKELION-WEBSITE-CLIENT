import React from 'react';
import styled from 'styled-components';
import Space from '../../util/Space';
import Curri from '../../assets/caption/curriculumn.png';
import MobileCurri from '../../assets/caption/mobile-curriculmn.png';
import css from '../../assets/icon/css.png';
import git from '../../assets/icon/git.png';
import github from '../../assets/icon/github.png';
import html from '../../assets/icon/html.png';
import js from '../../assets/icon/js.png';
import react from '../../assets/icon/react.png';
import django from '../../assets/icon/django.png';
import python from '../../assets/icon/python.png';
import aws from '../../assets/icon/aws.png';
import styledComponent from '../../assets/icon/styled-component.png';
import spring from '../../assets/icon/spring.png';
import figma from '../../assets/icon/figma.png';
import githubAction from '../../assets/icon/github-action.png';
import Footer from '../common/Footer';
import useMediaQuery from '../../hooks/useMediaQuery';
import MobileFooter from '../common/MobileFooter';
const frontIconList = [html, css, js, react, github, git];
const backIconList = [html, python, django, aws, github, git];
const mobileRow1List = [html, css, js, python, github, git];
const mobileRow2List = [
  react,
  django,
  aws,
  styledComponent,
  spring,
  figma,
  githubAction,
];
function FifthSection() {
  const isMobileScreen = useMediaQuery('(max-width: 768px)');
  return (
    <FifthWholeSection>
      <H1>Timeline</H1>
      <Space height={'2.7rem'} />
      <H2>
        {!isMobileScreen &&
          '멋쟁이사자처럼 서강대학교는 3월부터 11월까지 다양한 활동을 함께 합니다.'}
      </H2>
      <Space height={'3.8rem'} />
      <ImageBox>
        <CurriculumImage
          src={isMobileScreen ? MobileCurri : Curri}
          alt="커리큘럼"
        />
      </ImageBox>
      {isMobileScreen ? <Space height={'40rem'} /> : <Space height={'20vh'} />}
      <H1>Lion Sprint</H1>
      <Space height={'2.7rem'} />
      <H2>
        매주 화요일, 금요일에 진행되는 정기 세션에서 {isMobileScreen && <br />}{' '}
        다양한 기술 스택을 배우고 있습니다.
      </H2>
      <Space height={'6.2rem'} />
      {isMobileScreen ? (
        <>
          <OverflowMobileContainer>
            <ScrollMobileContainer>
              {mobileRow1List.map((item) => (
                <StackMobileItem key={item} $url={item}></StackMobileItem>
              ))}
            </ScrollMobileContainer>
          </OverflowMobileContainer>
          <Space height={'2rem'} />
          <OverflowMobileContainer>
            <ScrollMobileContainer>
              {mobileRow2List.map((item) => (
                <StackMobileItem key={item} $url={item}></StackMobileItem>
              ))}
            </ScrollMobileContainer>
          </OverflowMobileContainer>
          <Space height={'30rem'} />
        </>
      ) : (
        <>
          <H3>Front-end</H3>
          <OverflowContainer>
            <ScrollContainer>
              {frontIconList.map((item, index) => (
                <StackItem key={index}>
                  <StackImg src={item} />
                </StackItem>
              ))}
            </ScrollContainer>
          </OverflowContainer>
          <Space height={'10rem'} />
          <H3>Back-end</H3>
          <OverflowContainer>
            <ScrollContainer>
              {backIconList.map((item, index) => (
                <StackItem key={index}>
                  <StackImg src={item} />
                </StackItem>
              ))}
            </ScrollContainer>
          </OverflowContainer>
          <Space height={'25rem'} />
        </>
      )}

      {isMobileScreen ? <MobileFooter /> : <Footer isBackgroundBlack={true} />}
    </FifthWholeSection>
  );
}

const OverflowMobileContainer = styled.div`
  width: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ScrollMobileContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  width: fit-content;
`;

const StackMobileItem = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  background-color: white;
  object-fit: cover;
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.$url});
`;

const FifthWholeSection = styled.section`
  position: relative;
  z-index: 1;
  text-align: center;
  font-family: 'PP-Editorial';
  font-size: 4rem;
  font-weight: 400;
`;

const H1 = styled.h1`
  font-family: 'PP-Editorial';
  font-size: 4rem;
  color: white;
  font-style: normal;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 3.2rem;
  }
`;

const H2 = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.3;
  }
`;

const H3 = styled.div`
  color: #fff;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: 'PP-Editorial';
  font-size: 2.4rem;
  font-style: italic;
  font-weight: 200;
  line-height: normal;
  text-transform: capitalize;
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

const CurriculumImage = styled.img`
  width: 50vw;
  display: block;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const OverflowContainer = styled.div`
  width: calc(60vw);
  margin: 2rem auto;
  overflow: hidden;
  padding-top: 2rem;
  border-top: 1px solid white;
`;

const ScrollContainer = styled.div`
  display: flex;
  width: fit-content;
  margin: 0 auto;
`;

const StackItem = styled.div`
  width: 8vw;
  height: 8vw;
  margin-right: 1vw;
  background-color: white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
`;

const StackImg = styled.img`
  display: block;
  object-fit: cover;
`;

export default FifthSection;
