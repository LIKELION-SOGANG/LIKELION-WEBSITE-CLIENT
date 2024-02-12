import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TopBanner = () => {
  const navigate = useNavigate();
  return (
    <Banner onClick={() => navigate('/')}>
      <BannerText>likelion Sogang 12th Recruitment</BannerText>
      <HomeButton>홈으로 돌아가기</HomeButton>
    </Banner>
  );
};
const Banner = styled.div`
  display: flex;
  width: 56.2rem;
  align-items: center;
  justify-content: space-between;
  background: white;
`;

const BannerText = styled.div`
  color: var(--Main, #000);
  font-family: 'PP-Editorial';
  font-size: 2rem;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
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
`;
export default TopBanner;
