import React, { useEffect } from 'react';
import styled from 'styled-components';
import object1 from '../../assets/icon/object-1.png';
import object2 from '../../assets/icon/object-2.png';
import object3 from '../../assets/icon/object-3.png';

function FirstSection() {
  useEffect(() => {}, []);
  return (
    <FirstSectionWrapper>
      <Object1 src={object1} alt="3d 오브젝트1" />
      <Object2 src={object2} alt="3d 오브젝트2" />
      <Object3 src={object3} alt="3d 오브젝트3" />
      <LogoCaption>Likelion Sogang</LogoCaption>
    </FirstSectionWrapper>
  );
}
const FirstSectionWrapper = styled.div`
  height: 100vh;
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
  top: 0;
  right: 0;
  width: 70rem;
`;
const Object3 = styled.img`
  position: absolute;
  top: calc(100% - 30rem);
  left: 20rem;
  width: 30%;
`;
const LogoCaption = styled.div`
  font-family: 'PP-Editorial';
  position: absolute;
  top: 18rem;
  z-index: 999;
  white-space: nowrap;
  color: #fff;
  leading-trim: both;
  font-size: 46rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;

export default FirstSection;
