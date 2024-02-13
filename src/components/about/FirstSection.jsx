import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import object1 from '../../assets/icon/object-1.png';
import object2 from '../../assets/icon/object-2.png';
import object3 from '../../assets/icon/object-3.png';
import caption1 from '../../assets/caption/about-caption.svg';
import Space from '../../util/Space';
import useLoading from '../../hooks/useLoading';
import caption from '../../assets/caption/caption-possible.svg';
import useMediaQuery from '../../hooks/useMediaQuery';

function FirstSection({
  isVisibleHeaderLogo,
  scrollHeight,
  isBackGroundBlack,
}) {
  const isMobileScreen = useMediaQuery('(max-width: 768px)');

  return (
    <FirstSectionWrapper>
      <Object1 src={object1} alt="3d 오브젝트1" />
      {isBackGroundBlack && <Object2 src={object2} alt="3d 오브젝트2" />}
      {isBackGroundBlack && <Object3 src={object3} alt="3d 오브젝트3" />}

      {/*  process: 0~100 */}
      <LogoCaption
        $process={scrollHeight > 400 ? 100 : (scrollHeight / 400) * 100}
        $isVisibleHeaderLogo={isVisibleHeaderLogo}
      >
        Like<span>lion</span> So<span>gang</span>
      </LogoCaption>
      {isMobileScreen ? (
        <MobilePossibleCaption
          $isBackGroundBlack={isBackGroundBlack}
          $process={scrollHeight > 400 ? 100 : (scrollHeight / 400) * 100}
        >
          <Possibility>Possibility</Possibility>
          <To>To</To>
          <Reality>Reality</Reality>
        </MobilePossibleCaption>
      ) : (
        <PossibiltyCaption
          src={caption}
          $process={scrollHeight > 400 ? 100 : (scrollHeight / 400) * 100}
        />
      )}

      <TriangleLoop $isBackGroundBlack={isBackGroundBlack}>
        <div className="track">
          <LoopText>
            ✶ Now recruiting{' '}
            <span>
              Like<i>lion</i> 12th{' '}
            </span>{' '}
            Member ✶ Now recruiting{' '}
            <span>
              Like<i>lion</i> 12th{' '}
            </span>
            Member ✶ Now recruiting{' '}
            <span>
              Like<i>lion</i> 12th{' '}
            </span>
            Member ✶ Now recruiting{' '}
            <span>
              Like<i>lion</i> 12th{' '}
            </span>
            Member ✶ Now recruiting{' '}
            <span>
              Like<i>lion</i> 12th{' '}
            </span>
            Member ✶ Now recruiting{' '}
            <span>
              Like<i>lion</i> 12th{' '}
            </span>
            Member ✶
          </LoopText>
        </div>
      </TriangleLoop>
    </FirstSectionWrapper>
  );
}

const MobilePossibleCaption = styled.div`
  position: absolute;
  right: 4rem;
  font-family: 'PP-Editorial';
  color: ${(props) => (props.$isBackGroundBlack ? 'white' : 'black')};
  top: calc(100vh - 8rem - 10rem * ${(props) => props?.$process} / 100);
  right: calc(10rem + (22vw) * ${(props) => props?.$process} / 100);
  scale: calc(1 + ${(props) => props.$process} * 1 / 100);
  -webkit-transition: all 0.1s cubic-bezier(0.25, 0.25, 0.75, 0.75);
`;

const Possibility = styled.div`
  leading-trim: both;
  text-edge: cap;
  font-size: 3.2rem;
  font-style: italic;
  font-weight: 200;
  line-height: normal;
  text-transform: capitalize;
`;
const To = styled.div`
  font-size: 2rem;
  position: absolute;
  top: 3.6rem;
  left: 3.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: lowercase;
`;
const Reality = styled.div`
  font-size: 3.2rem;
  position: absolute;
  top: 3.9rem;
  left: 5.7rem;
  font-style: italic;
  font-weight: 200;
`;

const FirstSectionWrapper = React.memo(styled.div`
  height: calc(150vh);
  position: relative;
  z-index: 1;
  width: 100%;
  canvas {
    position: absolute;
    top: 1rem;
    z-index: 9999;
    left: 0rem;
  }
`);

const Object1 = React.memo(styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  filter: blur(0.5rem);
`);
const Object2 = React.memo(styled.img`
  position: absolute;
  top: -10rem;
  right: 0;
  width: 40rem;
  @media (max-width: 768px) {
    width: 50%;
    top: 35vh;
  }
`);
const Object3 = React.memo(styled.img`
  position: absolute;
  top: calc(100vh - 30rem);
  left: 20rem;
  width: 30%;
  @media (max-width: 768px) {
    top: calc(100vh - 20rem);
    left: 0;
  }
`);
const LogoCaption = React.memo(styled.div`
  font-family: 'PP-Editorial';
  position: fixed;
  z-index: 999;
  white-space: nowrap;
  color: #fff;
  leading-trim: both;
  font-size: calc(28vw - ${(props) => props.$process} * (28vw - 2rem) / 100);
  visibility: ${(props) => (props.$isVisibleHeaderLogo ? 'hidden' : 'visible')};
  transform: translateY(
      calc(100vh - 58rem - ${(props) => props.$process} * (100vh - 60rem) / 100)
    )
    translateX(2.5rem);
  -webkit-transition: all 0.1s cubic-bezier(0.25, 0.25, 0.75, 0.75);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  span {
    font-style: italic;
  }
  @media (max-width: 768px) {
    transform: translateY(
        calc(50vh - ${(props) => props.$process} * (50vh - 2rem) / 100)
      )
      translateX(2.5rem);
  }
`);

const PossibiltyCaption = React.memo(styled.img`
  position: absolute;
  top: calc(100vh - 8rem + 3rem * ${(props) => props?.$process} / 100);
  right: calc(10rem + (100vw - 50rem) * ${(props) => props?.$process} / 100);
  scale: calc(1 + ${(props) => props.$process} * 1.5 / 100);
  -webkit-transition: all 0.1s cubic-bezier(0.25, 0.25, 0.75, 0.75);
`);
const textLoop = keyframes`
from { transform: translateX(0); }
to { transform: translateX(-50%); }
`;
const TriangleLoop = styled.div`
  width: 200%;
  height: 25.2rem;
  position: absolute;
  background-color: ${(props) =>
    props.$isBackGroundBlack ? 'white' : 'black'};
  color: ${(props) => (props.$isBackGroundBlack ? 'black' : 'white')};
  transition: 1s ease;
  bottom: 0rem;
  overflow-x: hidden;
  overflow-y: hidden;
  transform: rotate(-8deg) translateX(-25%);

  .track {
    white-space: nowrap;
    position: absolute;
    animation: ${textLoop} 40s linear infinite;
  }
`;

const FirstText = styled.div``;

const LoopText = styled.p`
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
    text-transform: capitalize;
  }
  span i {
    font-style: italic;
  }
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export default React.memo(FirstSection);
