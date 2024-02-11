import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Space from '../../util/Space';
import AOS from 'aos';
import 'aos/dist/aos.css';
function SecondSection() {
  const newLettersRef = useRef();
  const [text, setText] = useState('THEN WHAT ABOUT');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const showTextEls = document.querySelectorAll('.show-text');
          showTextEls.forEach((item) => item.classList.add('hidden'));
          setTimeout(() => {
            setText('WE ARE');
          }, 400);
        }
      },
      {
        threshold: 0.8,
      },
    );
    observer.observe(newLettersRef.current);
  }, []);

  useEffect(() => {
    // 스크롤 애니메이션-> AOS 라이브러리 사용
    AOS.init();
  }, []);
  return (
    <SeondWholeSection>
      <Space height={'40rem'} />
      <p data-aos="fade-up" data-aos-duration="1000">
        멋쟁이사자처럼 대학은 국내외 <span>121개 </span>대학이 참여하는{' '}
        <span>국내 최대 규모의 IT 창업 동아리</span>입니다.
      </p>
      <Space height={'50vh'} />
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-cubic"
      >
        <span>“내 아이디어를 내 손으로 실현한다”</span>는 모토로,
        <br /> 누구든지 자신이 원하는 IT 서비스를 구현할 수 있도록 <br />
        각종 스터디와 네트워킹, 행사를 지원하고 있습니다.
      </p>
      <Space height={'50vh'} />
      <div className="sticky final-sticky">
        <section className="change-text">
          <div className="small-text">{text}</div>
          <div className="logo-text">
            Like<span>lion</span> So<span>gang</span>
          </div>
          <Space height={'8.6rem'} />
          <div className="show-text">
            멋쟁이사자처럼 서강대학교는 대면 교육 세션, 데모데이 등 다채로운
            활동을 통해
            <br /> 매년 구성원들의 <span>폭발적인 성장</span>을 이끌어내고
            있습니다.
          </div>
          <Space height={'1rem'} />
          <div className="show-text">
            그 성과로, 대학생 1500명이 참여한 작년 ‘멋쟁이사자처럼 전국 연합
            해커톤’에서 <br />
            <span>동상 수상 팀을 배출</span>했습니다.
          </div>
          <div className="sticky-space">
            <Space height={'8.6rem'} ref={newLettersRef} />
          </div>
        </section>
      </div>

      <Space height={'10rem'} />
    </SeondWholeSection>
  );
}

const SeondWholeSection = styled.section`
  background-color: white;
  transition: 1s;
  .sticky {
    height: 150vh;
  }
  .final-sticky {
    height: 200vh;
  }
  section.change-text {
    position: sticky;
    top: 30vh;
  }
  .small-text {
    color: var(--Main, #000);
    text-align: center;
    font-family: Figtree;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }
  .show-text {
    color: var(--Main, #000);
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    span {
      font-weight: 600;
    }
    opacity: 0;
    transition: opacity 3s ease-in-out;
  }
  .sticky-space {
    // position: sticky;
  }
  .hidden {
    opacity: 1;
  }
  .logo-text {
    font-family: 'PP-Editorial';
    font-size: 6.4rem;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
  }
  .logo-text span {
    font-style: italic;
  }
  p {
    color: black;
    text-align: center;
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    line-height: normal;
    font-weight: 500;
    line-height: 140%;
    text-transform: capitalize;
    span {
      font-weight: 700;
    }
  }
`;

export default SecondSection;
