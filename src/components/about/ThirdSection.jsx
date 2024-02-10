import React from 'react';
import styled from 'styled-components';
import awards from '../../assets/icon/awards.png';
import Space from '../../util/Space';

function ThirdSection() {
  return (
    <ThirdWholeSection>
      <Space height={'50vh'} />
      <div className="logo">
        Like<span>lion</span> So<span>gang</span>
      </div>
      <Space height={'2rem'} />
      <div className="number">by the numbers</div>
      <Space height={'30vh'} />
      <div className="big-num">
        <div className="num">
          <span>9</span>년
        </div>
        <div className="title">운영기간</div>
        <div className="content">
          멋쟁이사자처럼 서강대는 2016년부터 끊임없이 달려왔습니다.
        </div>
      </div>
      <div className="big-num">
        <div className="num">
          <span>
            <div className="plus">+</div>100
          </span>
        </div>
        <div className="title">프로젝트 수 </div>
        <div className="content">
          해커톤, 아이디어톤, 신촌톤, 데모데이를 포함하여 <br />
          100여개의 프로젝트를 진행했습니다.
        </div>
      </div>
      <div className="big-num">
        <div className="num">
          <span>
            <div className="plus">+</div>120
          </span>
        </div>
        <div className="title">가입 회원 수 </div>
        <div className="content">
          매년 새로운 아기사자들이 멋쟁이사자처럼과 함께 하고 있습니다.
        </div>
      </div>
      <section className="awards">
        <img src={awards} alt="awards-image" />
        <ul>
          <h1>Awards</h1>
          <li>
            <a
              href="
            "
            >
              <span>2023.08 |</span> 멋쟁이사자처럼 전국 연합 해커톤 3위
              (효자동개발자 팀) ↘
            </a>
          </li>
          <li>
            <a>
              <span>2021.08 |</span> 멋쟁이사자처럼 전국 연합 해커톤 1위 (URL
              repo 팀) ↘
            </a>
          </li>
          <li>
            <a>
              <span>2021.07 |</span> 멋쟁이사자처럼 전국 연합 아이디어톤 1위
              (URL repo 팀) ↘
            </a>
          </li>
        </ul>
      </section>
      <Space height={'20vh'} />
    </ThirdWholeSection>
  );
}

const ThirdWholeSection = styled.section`
  background-color: black;
  font-family: 'PP-Editorial';
  color: white;
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
  }
  .big-num {
  }
  .num {
    text-align: center;
    font-size: 3rem;
  }
  span .plus {
    font-size: 10rem;
    position: absolute;
    top: -8rem;
    right: -02rem;
  }
  .num span {
    position: relative;
    color: #fff;
    leading-trim: both;
    text-edge: cap;
    font-family: 'PP-Editorial';
    font-size: 20rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
  }
  .title {
    margin-top: 5rem;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
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
  }
`;

export default ThirdSection;
