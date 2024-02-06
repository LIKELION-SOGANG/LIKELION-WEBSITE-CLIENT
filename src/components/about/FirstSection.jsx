import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import object1 from '../../assets/icon/object-1.png';
import object2 from '../../assets/icon/object-2.png';
import object3 from '../../assets/icon/object-3.png';
import caption1 from '../../assets/caption/about-caption.svg';
import Header from '../common/Header';

function FirstSection() {
  const [scrollHeight, setScrollHeight] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 800) {
        setScrollHeight(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(scrollHeight);
  return (
    <FirstSectionWrapper>
      <Header />
      <Object1 src={object1} alt="3d 오브젝트1" />
      <Object2 src={object2} alt="3d 오브젝트2" />
      <Object3 src={object3} alt="3d 오브젝트3" />
      {/*  process: 0~100 */}
      <LogoCaption $process={(scrollHeight / 800) * 100}>
        Likelion Sogang
      </LogoCaption>
      <PossibiltyCaption src={caption1} $process={(scrollHeight / 800) * 100} />
    </FirstSectionWrapper>
  );
}
const FirstSectionWrapper = styled.div`
  height: 200vh;
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
  top: calc(
    100vh - 65rem - ${(props) => props.$process} * (100vh - 67rem) / 100
  );
  left: 2.5rem;
  z-index: 999;
  white-space: nowrap;
  color: #fff;
  leading-trim: both;
  font-size: calc(46rem - ${(props) => props.$process} * (44.6rem) / 100);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;
const PossibiltyCaption = styled.img`
  position: absolute;
  top: calc(100vh - 13rem + ${(props) => props.$process} * (40rem) / 100);
  scale: calc(1 + ${(props) => props.$process} * (1.5) / 100);
  right: calc(10rem + ${(props) => props.$process} * (100vw - 50rem) / 100);
`;
export default FirstSection;
