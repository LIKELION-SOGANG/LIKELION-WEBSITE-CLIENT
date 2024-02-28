import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import object1 from '../../assets/icon/object-1.png';
import object2 from '../../assets/icon/object-2.png';
import object3 from '../../assets/icon/object-3.png';
import caption1 from '../../assets/caption/about-caption.svg';
import Header from '../common/Header';
import Space from '../../util/Space';

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function FirstSection({ isVisibleHeaderLogo, scrollHeight }) {
  const object1Ref = useRef(null);
  const object2Ref = useRef(null);
  const object3Ref = useRef(null);
  const logoCaptionRef = useRef(null);
  const possibilityCaptionRef = useRef(null);

  useEffect(() => {
    // Animation for Object1
    gsap.from(object1Ref.current, {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: object1Ref.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    // Animation for Object2
    gsap.from(object2Ref.current, {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: object2Ref.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    // Animation for Object3
    gsap.from(object3Ref.current, {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: object3Ref.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    // Animation for LogoCaption and PossibilityCaption
    gsap.from([logoCaptionRef.current, possibilityCaptionRef.current], {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: logoCaptionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  }, []);

  return (
    <FirstSectionWrapper>
      <Object1 ref={object1Ref} src={object1} alt="3d 오브젝트1" />
      <Object2 ref={object2Ref} src={object2} alt="3d 오브젝트2" />
      <Object3 ref={object3Ref} src={object3} alt="3d 오브젝트3" />
      {/*  process: 0~100 */}
      <LogoCaption
        ref={logoCaptionRef}
        $process={scrollHeight > 400 ? 100 : (scrollHeight / 400) * 100}
        $isVisibleHeaderLogo={isVisibleHeaderLogo}
      >
        Like<span>lion</span> So<span>gang</span>
      </LogoCaption>
      <PossibiltyCaption
        ref={possibilityCaptionRef}
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
      <Space height={'10rem'} />
    </FirstSectionWrapper>
  );
}

const FirstSectionWrapper = styled.div`
  height: 176vh;
  position: relative;
  background-color: black;
`;

const Object1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
`;
const Object2 = styled.img`
  position: absolute;
  top: -10rem;
  right: 0;
  width: 40rem;
`;
const Object3 = styled.img`
  position: absolute;
  top: calc(100vh - 30rem);
  left: 20rem;
  width: 30%;
`;
const LogoCaption = styled.div`
  font-family: 'PP-Editorial';
  position: fixed;
  transform: translateY(
      calc(100vh - 58rem - ${(props) => props.$process} * (100vh - 60rem) / 100)
    )
    translateX(2.5rem);
  z-index: 999;
  white-space: nowrap;
  color: #fff;
  leading-trim: both;
  font-size: calc(40rem - ${(props) => props.$process} * (38rem) / 100);
  visibility: ${(props) => (props.$isVisibleHeaderLogo ? 'hidden' : 'visible')};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  span {
    font-style: italic;
  }
`;

const PossibiltyCaption = styled.img`
  position: absolute;
  top: calc(100vh - 13rem + 34rem * ${(props) => props?.$process} / 100);
  right: calc(10rem + (100vw - 50rem) * ${(props) => props?.$process} / 100);
  scale: calc(1 + ${(props) => props.$process} * 1.5 / 100);
`;
const textLoop = keyframes`
from { transform: translateX(0); }
to { transform: translateX(-50%); }
`;
const TriangleLoop = styled.div`
  width: 130%;
  height: 35.2rem;
  position: absolute;
  background-color: white;
  bottom: -15.2rem;
  overflow-x: hidden;
  overflow-y: hidden;
  transform: rotate(-12.35deg);

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

export default FirstSection;
