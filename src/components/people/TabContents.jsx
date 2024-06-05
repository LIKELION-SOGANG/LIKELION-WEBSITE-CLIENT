import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import styled from 'styled-components';
import DividerWithText from './DividerWithText';

const Member = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16vw;
  height: auto;
  @media (max-width: 768px) {
    width: 35vw;
  }
`;

const Emoji = styled.img`
  width: 20rem;
  height: 20rem;
  margin-bottom: 2rem;
  display: block;
  object-fit: contain;
`;

const Name = styled.div`
  font-family: 'Pretendard';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const Info = styled.div`
  font-family: 'Pretendard';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
`;

const BabyLionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  padding: 4rem 2rem;
  flex-wrap: wrap;
  padding-bottom: 40rem;
  max-width: 70%;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const BabyLion = styled.div`
  font-family: 'Pretendard';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
`;

const NoData = styled.div`
  font-family: 'PP-Editorial';
  font-size: 2.5rem;
  font-weight: 400;
  font-style: italic;
  color: grey;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const EasterEgg = styled.div`
  margin-top: 0.4rem;
  font-weight: 600;
`;

const TabContents = ({ data }) => {
  if (!data) return null;

  const { adult_lion, baby_lion, generation } = data;

  const slidesPerView = useSlidesPerView();
  return (
    <>
      {adult_lion.length !== 1 && (
        <>
          {' '}
          <DividerWithText text="운영진" />
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            speed={1500}
            slidesPerView={slidesPerView}
            style={{
              marginLeft: '2rem',
              marginRight: '2rem',
              marginTop: '4rem',
              marginBottom: '12rem',
            }}
          >
            {adult_lion?.map((member) => (
              <SwiperSlide key={member.id}>
                <Member>
                  <Emoji src={member.emoji} alt={member.name} />
                  <Name>{member.name}</Name>
                  <Info>
                    {generation} / {member.part}
                  </Info>
                  {member.is_president ? (
                    <EasterEgg>대표</EasterEgg>
                  ) : member.is_vice_president ? (
                    <EasterEgg>부대표</EasterEgg>
                  ) : (
                    ''
                  )}
                </Member>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}

      <DividerWithText text="아기사자" />
      <BabyLionContainer>
        {baby_lion?.length > 0 ? (
          baby_lion.map((lion, index) => (
            <BabyLion key={lion.id}>{lion.name}</BabyLion>
          ))
        ) : (
          <NoData>You are the next!</NoData>
        )}
      </BabyLionContainer>
    </>
  );
};

const useSlidesPerView = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width > 1600) {
        setSlidesPerView(6);
      } else if (width > 1200) {
        setSlidesPerView(5);
      } else if (width > 900) {
        setSlidesPerView(4);
      } else if (width > 700) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  return slidesPerView;
};

export default TabContents;
