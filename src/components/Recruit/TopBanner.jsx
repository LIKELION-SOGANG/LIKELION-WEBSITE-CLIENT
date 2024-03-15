import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useMediaQuery from '../../hooks/useMediaQuery';

const TopBanner = () => {
  const navigate = useNavigate();
  return (
    <Banner>
      <BannerText $isMobile={true}>
        Like <Styletext>lion</Styletext>&nbsp;So
        <Styletext>gang&nbsp;</Styletext>
        12
        <Styletext>th&nbsp;</Styletext> Re
        <Styletext>cruitment</Styletext>
      </BannerText>
      <HomeButton
        onClick={() => {
          navigate('/recruit');
        }}
      >
        홈으로 돌아가기
      </HomeButton>
    </Banner>
  );
};
const Banner = styled.div`
  display: flex;
  width: 56.2rem;
  align-items: center;
  justify-content: space-between;
  background: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BannerText = styled.div`
  color: var(--Main, #000);
  font-family: 'PP-Editorial';
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    font-weight: 400;
    visibility: hidden;
  }
`;
const Styletext = styled.div`
  font-style: italic;
`;
const HomeButton = styled.button`
  display: inline-flex;
  padding: 0.6rem 1.3rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #b7b7b7;
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  border-radius: 2rem;
  background: #f4f4f4;
  @media (max-width: 768px) {
    font-size: 1.4rem;
    font-weight: 500;
    margin: 1rem;
  }
`;
export default TopBanner;
