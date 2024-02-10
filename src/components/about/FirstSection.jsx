import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import object1 from '../../assets/icon/object-1.png';
import object2 from '../../assets/icon/object-2.png';
import object3 from '../../assets/icon/object-3.png';
import caption1 from '../../assets/caption/about-caption.svg';
import Space from '../../util/Space';

function FirstSection({ isVisibleHeaderLogo, scrollHeight }) {
  return (
    <FirstSectionWrapper>
      <Object1 src={object1} alt="3d 오브젝트1" />
      <Object2 src={object2} alt="3d 오브젝트2" />
      <Object3 src={object3} alt="3d 오브젝트3" />
      {/*  process: 0~100 */}
      <LogoCaption
        $process={scrollHeight > 400 ? 100 : (scrollHeight / 400) * 100}
        $isVisibleHeaderLogo={isVisibleHeaderLogo}
      >
        Like<span>lion</span> So<span>gang</span>
      </LogoCaption>
      <PossibiltyCaption
        src={caption1}
        $process={scrollHeight > 400 ? 100 : (scrollHeight / 400) * 100}
      />
      <TriangleLoop>
        <div className="track">
          <LoopText>
            ✶ Now recruiting <span>Likelion 12th</span> Member ✶ Now recruiting{' '}
            <span>Likelion 12th</span> Member ✶ Now recruiting{' '}
            <span>Likelion 12th</span> Member ✶ Now recruiting{' '}
            <span>Likelion 12th</span> Member ✶ Now recruiting{' '}
            <span>Likelion 12th</span> Member ✶ Now recruiting{' '}
            <span>Likelion 12th</span> Member ✶
          </LoopText>
        </div>
      </TriangleLoop>
      <Space height={'100rem'} />
    </FirstSectionWrapper>
  );
}
const FirstSectionWrapper = React.memo(styled.div`
  height: 176vh;
  position: relative;
  background-color: black;
  overflow: hidden;
`);

const Object1 = React.memo(styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
`);
const Object2 = React.memo(styled.img`
  position: absolute;
  top: -10rem;
  right: 0;
  width: 40rem;
`);
const Object3 = React.memo(styled.img`
  position: absolute;
  top: calc(100vh - 30rem);
  left: 20rem;
  width: 30%;
`);
const LogoCaption = React.memo(styled.div`
  font-family: 'PP-Editorial';
  position: fixed;
  z-index: 999;
  white-space: nowrap;
  color: #fff;
  leading-trim: both;
  font-size: calc(40rem - ${(props) => props.$process} * (38rem) / 100);
  visibility: ${(props) => (props.$isVisibleHeaderLogo ? 'hidden' : 'visible')};
  transform: translateY(
      calc(100vh - 58rem - ${(props) => props.$process} * (100vh - 60rem) / 100)
    )
    translateX(2.5rem);
  -webkit-transition: all 0.3s cubic-bezier(0.25, 0.25, 0.75, 0.75);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  span {
    font-style: italic;
  }
`);

const PossibiltyCaption = React.memo(styled.img`
  position: absolute;
  top: calc(100vh - 17rem + 34rem * ${(props) => props?.$process} / 100);
  right: calc(10rem + (100vw - 50rem) * ${(props) => props?.$process} / 100);
  scale: calc(1 + ${(props) => props.$process} * 1.5 / 100);
  -webkit-transition: all 0.3s cubic-bezier(0.25, 0.25, 0.75, 0.75);
`);
const textLoop = keyframes`
from { transform: translateX(0); }
to { transform: translateX(-50%); }
`;
const TriangleLoop = styled.div`
  width: 130%;
  height: 35.2rem;
  position: absolute;
  background-color: white;
  bottom: -13rem;
  overflow-x: hidden;
  overflow-y: hidden;
  transform: rotate(-8deg);

  .track {
    white-space: nowrap;
    position: absolute;
    animation: ${textLoop} 40s linear infinite;
  }
`;

const LoopText = styled.p`
  color: black;
  leading-trim: both;
  text-edge: cap;
  font-family: Figtree;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.14rem;
  text-transform: uppercase;
  font-weight: 400;
  span {
    font-family: 'PP-Editorial';
    font-weight: 400;
  }
`;

export default React.memo(FirstSection);
