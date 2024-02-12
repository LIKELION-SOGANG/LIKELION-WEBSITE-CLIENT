import React, { useEffect, useRef, useState } from 'react';
import Schedule from '../components/Recruit/Schedule';
import styled from 'styled-components';
import Faq from '../components/Recruit/Faq';
import Intro from '../components/Recruit/Intro';
import Header from '../components/common/Header';
import useMediaQuery from '../hooks/useMediaQuery';
import MobileHeader from '../components/common/MobileHeader';
import MobileFooter from '../components/common/MobileFooter';
import Footer from '../components/common/Footer';

function Recruit() {
  const observationRef = useRef();
  const observationRef2 = useRef();
  const [backgroundColor, setBackgroundColor] = useState('black');
  const [isBackGroundBlack, setIsBackGroundBlack] = useState(true);
  const isMobileScreen = useMediaQuery('(max-width: 768px)');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let firstSectionVisible = false;
        let secondSectionVisible = false;

        entries.forEach((entry) => {
          if (entry.target.className === 'first-section') {
            firstSectionVisible = entry.isIntersecting;
          } else if (entry.target.className === 'second-section') {
            secondSectionVisible = entry.isIntersecting;
          }
        });

        if (firstSectionVisible && !secondSectionVisible) {
          setBackgroundColor('black');
          setIsBackGroundBlack(true);
        } else if (!firstSectionVisible && secondSectionVisible) {
          setBackgroundColor('white');
          setIsBackGroundBlack(false);
        }
      },
      {
        threshold: [0.22, 1.0],
      },
    );

    if (observationRef.current) {
      observer.observe(observationRef.current);
    }
    if (observationRef2.current) {
      observer.observe(observationRef2.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className="first-section"
        ref={observationRef}
        style={{ position: 'relative', 'z-index': '1' }}
      >
        <Intro />
      </div>
      <div className="second-section" ref={observationRef2}>
        <RecruitContainer
          style={{
            backgroundColor: backgroundColor,
            transition: 'background-color 1.5s ease',
          }}
        >
          {isMobileScreen ? (
            <MobileHeader isBackGroundBlack={isBackGroundBlack} />
          ) : (
            <Header isBackGroundBlack={isBackGroundBlack} />
          )}

          <Schedule />
          <Faq />
        </RecruitContainer>
        {isMobileScreen ? (
          <MobileFooter isBackgroundBlack={isBackGroundBlack} />
        ) : (
          <Footer isBackgroundBlack={isBackGroundBlack} />
        )}
      </div>
    </>
  );
}
const RecruitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10rem;
  position: relative;
  z-index: 1;
`;

export default Recruit;
