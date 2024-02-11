import React from 'react';
import styled from 'styled-components';
import Space from '../../util/Space';
import Curri from '../../assets/caption/curriculumn.png';
import css from '../../assets/icon/css.png';
import git from '../../assets/icon/git.png';
import github from '../../assets/icon/github.png';
import html from '../../assets/icon/html.png';
import js from '../../assets/icon/js.png';
import react from '../../assets/icon/react.png';
import django from '../../assets/icon/django.png';
import python from '../../assets/icon/python.png';
import aws from '../../assets/icon/aws.png';
import Footer from '../common/Footer';
const frontIconList = [html, css, js, react, github, git];
const backIconList = [html, python, django, aws, github, git];
function FifthSection() {
  return (
    <FifthWholeSection>
      <Space height={'20vh'} />
      <H1>Timeline</H1>
      <Space height={'2.7rem'} />
      <H2>
        멋쟁이사자처럼 서강대학교는 3월부터 11월까지 다양한 활동을 함께 합니다.
      </H2>
      <Space height={'3.8rem'} />
      <ImageBox>
        <CurriculumImage src={Curri} alt="커리큘럼" />
      </ImageBox>
      <Space height={'20vh'} />
      <H1>Lion Sprint</H1>
      <Space height={'2.7rem'} />
      <H2>
        매주 화요일, 금요일에 진행되는 정기 세션에서 다양한 기술 스택을 배우고
        있습니다.
      </H2>
      <Space height={'6.2rem'} />
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
      <Footer isBackgroundBlack={true} />
    </FifthWholeSection>
  );
}
const FifthWholeSection = styled.section`
  background-color: black;
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
`;

const H2 = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 500;
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
`;

const OverflowContainer = styled.div`
  width: 83vw;
  margin: 2rem auto;
  overflow: hidden;
  padding-top: 2rem;
  border-top: 1px solid white;
`;

const ScrollContainer = styled.div`
  display: flex;
  width: fit-content;
`;

const StackItem = styled.div`
  width: 13vw;
  height: 13vw;
  margin-right: 1vw;
  background-color: white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StackImg = styled.img`
  display: block;
  width: calc(100% - 7rem);
`;

export default FifthSection;
