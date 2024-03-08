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
  // const observationRef = useRef();
  const observationRef2 = useRef();
  const [backgroundColor, setBackgroundColor] = useState('black');
  const [isBackGroundBlack, setIsBackGroundBlack] = useState(true);
  const isMobileScreen = useMediaQuery('(max-width: 768px)');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // let firstSectionVisible = false;
        let secondSectionVisible = false;
        entries.forEach((entry) => {
          // if (entry.target.className === 'first-section') {
          //   firstSectionVisible = entry.isIntersecting;
          // } else
          if (entry.target.className === 'second-section') {
            secondSectionVisible = entry.isIntersecting;
          }
        });
        if (secondSectionVisible) {
          setBackgroundColor('white');
          setIsBackGroundBlack(false);
        } else {
          setBackgroundColor('black');
          setIsBackGroundBlack(true);
        }
      },
      {
        threshold: [0.05, 1],
      },
    );

    if (observationRef2.current) {
      observer.observe(observationRef2.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <OverallContainer style={{ backgroundColor: backgroundColor }}>
      <div className="first-section">
        <Intro />
      </div>
      <div className="second-section" ref={observationRef2}>
        {isMobileScreen ? (
          <MobileHeader isBackGroundBlack={isBackGroundBlack} />
        ) : (
          <Header isBackGroundBlack={isBackGroundBlack} />
        )}

        <RecruitContainer>
          <Schedule />
          <Faq />
        </RecruitContainer>
        {isMobileScreen ? (
          <MobileFooter isBackgroundBlack={isBackGroundBlack} />
        ) : (
          <Footer isBackgroundBlack={isBackGroundBlack} />
        )}
      </div>
    </OverallContainer>
  );
}
const OverallContainer = styled.div`
  transition: background-color 1.5s ease;
`;
const RecruitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem;
  position: relative;
  z-index: 1;
`;

export default Recruit;
