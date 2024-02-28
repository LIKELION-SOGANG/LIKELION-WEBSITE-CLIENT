import React from 'react';
import styled from 'styled-components';
import Space from '../util/Space';
import greyLogo from '../assets/icon/likelion-grey.png';
import backButton from '../assets/icon/ctrlz.png';
import { useNavigate } from 'react-router-dom';
import { useMousePosition } from '../util/MouseContextProvider';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
function Credit() {
  const { textEnter, textLeave } = useMousePosition();
  const navigate = useNavigate();
  const clickNavigate = () => {
    navigate('/');
  };
  const isMobileScreen = useMediaQuery('(max-width: 768px)');

  return (
    <CreditWrapper>
      <Space height={'12rem'} />
      <BackButton
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        src={backButton}
        onClick={clickNavigate}
      />
      <h1>CREDITS</h1>
      <section className="design">
        <label>Design</label>
        <div className="people">
          <p>Sunmyeong Lee</p>
          <p>Koeun Jeong</p>
        </div>
      </section>
      <section className="frontend">
        <label>Front-End Develop</label>
        <div className="people">
          <p>Inyoung Chung</p>
          <p>Sunmyeong Lee</p>
          <p>Koeun Jeong</p>
          <p>Sehwan Jang</p>
        </div>
      </section>
      <section className="backend">
        <label>Back-end Develop</label>
        <div className="people">
          <p>Yuyi Kim</p>
          <p>Jeongyeon Lim</p>
        </div>
      </section>
      <footer>
        <div className="star">✽</div>
        <div className="logo">
          <img src={greyLogo} alt="서강대 멋사 로고" />
          <p className="logo">
            Like<span>lion</span>&nbsp;So<span>gang</span>
          </p>
        </div>
        <Space height={'3rem'} />
        <p className="small">
          Likelion Sogang, a leading IT startup club at Sogang University,
          empowers{isMobileScreen && <br />} members to bring their ideas to
          life, {!isMobileScreen && <br />}
          fostering innovation, and achieving notable {isMobileScreen && <br />}
          success with the motto, Lets actualize our ideas with our own hands!
        </p>
        <Space height={'3rem'} />
        <p className="small">© Likelion Sogang. All Rights Reserved.</p>
        <Space height={'3rem'} />
      </footer>
    </CreditWrapper>
  );
}

const CreditWrapper = styled.div`
  background-color: black;
  position: relative;
  text-align: center;
  width: 100vw;
  color: white;
  font-family: 'PP-Editorial';
  h1 {
    font-size: 3rem;
    text-transform: capitalize;
    margin-bottom: 6.1rem;
    @media (max-width: 768px) {
      font-size: 2.4rem;
    }
  }
  section {
    display: flex;
    justify-content: center;
    gap: 2.6rem;
    margin-bottom: 10rem;
  }
  label {
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
    text-align: right;
    width: 16rem;
  }
  .people p {
    text-align: left;
    margin-bottom: 1rem;
    padding-right: 6rem;
    white-space: nowrap;
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.6rem;
      padding-right: 12rem;
    }
    font-weight: 400;
  }

  .star {
    text-align: center;
    font-family: 'PP-Editorial';
    font-size: 2rem;
    margin-bottom: 5.1rem;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo img {
    display: block;
    width: 6rem;
    margin-bottom: 1rem;
    margin-right: 0.5rem;
    @media (max-width: 768px) {
      width: 3rem;
      margin-bottom: 0.4rem;
      margin-right: 0.5rem;
    }
  }
  .logo p.logo {
    color: #fff;
    font-family: 'PP-Editorial';
    font-size: 4.8rem;
    @media (max-width: 768px) {
      font-size: 2.4rem;
    }
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  p.small {
    margin: 0 auto;
    color: #fff;
    text-align: center;
    font-family: 'PP-Editorial';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  .logo p span {
    font-style: italic;
  }
`;

const BackButton = styled(motion.img)`
  position: fixed;
  width: 10rem;
  cursor: pointer;
  top: 3rem;
  right: 3vw;
`;

export default Credit;
