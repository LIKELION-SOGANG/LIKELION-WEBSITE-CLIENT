import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import awards from '../../assets/icon/awards.png';
import Space from '../../util/Space';
import { useScrollCount } from '../../hooks/useScrollCount';
import { useMousePosition } from '../../util/MouseContextProvider';
import useMediaQuery from '../../hooks/useMediaQuery';

function ThirdSection() {
  const firstAnimatedNum = useScrollCount(9, 1, 0, 1000);
  const secondAnimatedNum = useScrollCount(100, 1, 0, 100);
  const thirdAnimatedNum = useScrollCount(120, 1, 0, 1000);
  const { textEnter, textLeave } = useMousePosition();
  const isMobileScreen = useMediaQuery('(max-width: 768px)');
  return (
    <ThirdWholeSection
      $isFirst={firstAnimatedNum.ref?.current?.outerText === '9'}
      $isSecond={secondAnimatedNum.ref?.current?.outerText === '100'}
      $isThird={thirdAnimatedNum.ref?.current?.outerText === '120'}
    >
      <Space height={'50vh'} />
      <div className="logo">
        Like<span>lion</span> So<span>gang</span>
      </div>
      <Space height={'2rem'} />
      <div className="number">by the numbers</div>
      <Space height={'30vh'} />
      <div className="big-num">
        <div className="num duration">
          <span ref={firstAnimatedNum.ref}>0</span>년
        </div>
        <div className="title">운영기간</div>
        <div className="content">
          멋쟁이사자처럼 서강대는 2016년부터 끊임없이 달려왔습니다.
        </div>
      </div>
      <div className="big-num projects">
        <div className="num">
          <span>
            <div className="plus">+</div>
            <span ref={secondAnimatedNum.ref}>0</span>
          </span>
        </div>
        <div className="title">프로젝트 수 </div>
        <div className="content">
          해커톤, 아이디어톤, 신촌톤, 데모데이를 포함하여 <br />
          100여개의 프로젝트를 진행했습니다.
        </div>
      </div>
      <div className="big-num members">
        <div className="num">
          <span>
            <div className="plus">+</div>
            <span ref={thirdAnimatedNum.ref}>0</span>
          </span>
        </div>
        <div className="title">가입 회원 수 </div>
        <div className="content">
          매년 새로운 아기사자들이 멋쟁이사자처럼과 함께 하고 있습니다.
        </div>
      </div>
      {isMobileScreen ? (
        <>
          <AwardBackImge>
            <Awards>Awards</Awards>
          </AwardBackImge>
          <Space height={'2.4rem'} />
          <AwardsItem>
            <div className="plan">2023.08</div>
            <div className="contentss">
              <a
                href="https://platum.kr/archives/212513"
                target="_blank"
                rel="noreferrer"
              >
                멋쟁이사자처럼 전국 연합 해커톤 3위 (효자동개발자 팀) ↘
              </a>
            </div>
          </AwardsItem>
          <AwardsItem>
            <div className="plan">2021.08</div>
            <div className="contentss">
              <a
                href="https://www.instagram.com/p/CTNGreslBDy/?img_index=1"
                target="_blank"
                rel="noreferrer"
              >
                멋쟁이사자처럼 전국 연합 해커톤 1위 (URL repo 팀) ↘
              </a>
            </div>
          </AwardsItem>
          <AwardsItem>
            <div className="plan">2021.07</div>
            <div className="contentss">
              <a
                href="https://www.instagram.com/p/CRbGH4rjBW2/?img_index=1"
                target="_blank"
                rel="noreferrer"
              >
                멋쟁이사자처럼 전국 연합 아이디어톤 1위 (URL repo 팀) ↘
              </a>
            </div>
          </AwardsItem>
        </>
      ) : (
        <section className="awards">
          <img src={awards} alt="awards-image" />
          <ul>
            <h1>Awards</h1>
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <a
                href="https://platum.kr/archives/212513"
                target="_blank"
                rel="noreferrer"
              >
                <span>2023.08 |</span> 멋쟁이사자처럼 전국 연합 해커톤 3위
                (효자동개발자 팀) ↘
              </a>
            </li>
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <a
                href="https://www.instagram.com/p/CTNGreslBDy/?img_index=1"
                target="_blank"
                rel="noreferrer"
              >
                <span>2021.08 |</span> 멋쟁이사자처럼 전국 연합 해커톤 1위 (URL
                repo 팀) ↘
              </a>
            </li>
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <a
                href="https://www.instagram.com/p/CRbGH4rjBW2/?img_index=1"
                target="_blank"
                rel="noreferrer"
              >
                <span>2021.07 |</span> 멋쟁이사자처럼 전국 연합 아이디어톤 1위
                (URL repo 팀) ↘
              </a>
            </li>
          </ul>
        </section>
      )}
      <Space height={'40vh'} />
    </ThirdWholeSection>
  );
}

const AwardBackImge = styled.div`
  background-image: url(${awards});
  width: 100%;
  height: 40rem;
  position: relative;
  background-position: center;
  background-size: cover;
`;

const Awards = styled.div`
  position: absolute;
  bottom: 2.1rem;
  left: 3rem;
  font-size: 4rem;
`;

const AwardsItem = styled.div`
  width: calc(100% - 4rem);
  margin: 0 auto 1.5rem;
  .plan {
    color: #fff;
    font-family: Pretendard;
    font-size: 1.3rem;
    line-height: 200%;
    font-style: normal;
    font-weight: 700;
  }
  .contentss {
    color: #fff;
    font-family: Pretendard;
    font-size: 1.3rem;
    text-align: left;
    font-style: normal;
    position: relative;
    z-index: 10000;
    font-weight: 400;
  }
`;

const ThirdWholeSection = styled.section`
  .duration .plus {
    visibility: ${(props) => (props.$isFirst ? 'visible' : 'hidden')};
  }
  .projects .plus {
    visibility: ${(props) => (props.$isSecond ? 'visible' : 'hidden')};
  }
  .members .plus {
    visibility: ${(props) => (props.$isThird ? 'visible' : 'hidden')};
  }
  font-family: 'PP-Editorial';
  color: white;
  position: relative;
  overflow: hidden;
  z-index: 1;
  section.awards {
    display: flex;
    align-items: flex-end;
    gap: 2rem;
  }

  section.awards h1 {
    font-size: 9.6rem;
    margin-bottom: 4.5rem;
  }
  section.awards li a span {
    font-family: Pretendard;
  }
  section.awards li a {
    position: relative;
    z-index: 100;
    font-size: 1.6rem;
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    &:after {
      content: '';
      display: block;
      transform: scaleX(0);
      border-bottom: 1px solid white;
      transition: transform 250ms ease-in-out;
    }
    &:hover {
      &:after {
        transform: scaleX(1);
        transform-origin: 0% 50%;
      }
    }
  }

  section.awards img {
    display: inline-block;
    width: 50%;
  }
  .logo {
    font-size: 6.4rem;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 3.6rem;
    }
  }
  .logo span {
    font-style: italic;
  }
  .number {
    color: #fff;
    text-align: center;
    font-family: Figtree;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
  .big-num {
  }
  .num {
    text-align: center;
    font-size: 3rem;
  }
  span .plus {
    font-weight: 100;
    font-size: 10rem;
    position: absolute;
    top: -8rem;
    transition: 0.4s ease;
    font-family: Pretendard;
    right: -6rem;
    @media (max-width: 768px) {
      font-size: 4rem;
      top: -3rem;
      right: -1.4rem;
    }
  }
  .num span {
    position: relative;
    color: #fff;
    leading-trim: both;
    width: 3rem;
    text-edge: cap;
    font-family: 'PP-Editorial';
    font-size: 20rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    @media (max-width: 768px) {
      font-weight: 100;
    }
  }
  .title {
    margin-top: 5rem;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }
  .content {
    color: #fff;
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-family: Pretendard;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin-top: 1.5rem;
    margin-bottom: 20rem;
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
`;

export default ThirdSection;
