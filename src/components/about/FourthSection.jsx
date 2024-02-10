import React from 'react';
import styled, { keyframes } from 'styled-components';
import Space from '../../util/Space';
import baemin from '../../assets/icon/baemin.svg';
import coupang from '../../assets/icon/coupang.png';
import kaist from '../../assets/icon/kaist.png';
import lg from '../../assets/icon/lg.png';
import naver from '../../assets/icon/naver.png';
import samsung from '../../assets/icon/samsung.png';
import shinsegae from '../../assets/icon/shinsegae.png';
import sk from '../../assets/icon/sk.png';
const imgList = [
  baemin,
  coupang,
  kaist,
  lg,
  naver,
  samsung,
  shinsegae,
  sk,
  baemin,
  coupang,
  kaist,
  lg,
  naver,
  samsung,
  shinsegae,
  sk,
];
function FourthSection({ isHeaderBlack }) {
  return (
    <FourthWholeSection $isHeaderBlack={isHeaderBlack}>
      <Space height={'30vh'} />
      <h1 className="likelion">
        From Like<span>lion</span> So<span>gangs</span>
      </h1>
      <p className="description">
        멋쟁이사자처럼 서강대학교 알럼나이들의 Possibility to Reality
      </p>
      <Space height={'8rem'} />
      <div className="logo-container">
        <div className="logo-scroll">
          {imgList.map((item, index) => {
            return (
              <SlideItem key={index}>
                <IconImage
                  src={item}
                  style={{
                    width: index === 7 || index === 15 ? '10rem' : '20rem',
                  }}
                />
              </SlideItem>
            );
          })}
        </div>
        <div className="logo-scroll reverse">
          {imgList.map((item, index) => {
            return (
              <SlideItem key={index}>
                <IconImage
                  src={item}
                  style={{
                    width: index === 7 || index === 15 ? '10rem' : '20rem',
                  }}
                />
              </SlideItem>
            );
          })}
        </div>
      </div>
      <Space height={'15rem'} />
    </FourthWholeSection>
  );
}
const loopAnimation = keyframes`
  from{
    transform: translateX(0);
  }
  to{
    transform: translate(-50%);
  }
`;
const FourthWholeSection = styled.section`
  margin-top: 2.7rem;
  transition: 1s;
  h1.likelion {
    font-family: PP-Editorial;
    text-align: center;
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-family: PP-Editorial;
    font-size: 4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    span {
      font-style: italic;
    }
  }
  p.description {
    color: var(--Main, #000);
    text-align: center;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
  }
  .logo-container {
    width: 100%;
    overflow: hidden;
  }
  .logo-scroll {
    display: flex;
    align-items: center;
    width: fit-content;
    animation-name: ${loopAnimation};
    animation-duration: 10s;
    animation-direction: reverse;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .logo-scroll.reverse {
    animation-direction: normal;
  }
`;

const IconImage = styled.img`
  display: block;
`;

const SlideItem = styled.div`
  width: 25rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default FourthSection;
