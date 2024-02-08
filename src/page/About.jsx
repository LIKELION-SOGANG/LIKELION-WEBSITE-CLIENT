import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/common/Header';
import FirstSection from '../components/about/FirstSection';
import SecondSection from '../components/about/SecondSection';
import useThrottleScroll from '../hooks/useThrottleScroll';
import ThirdSection from '../components/about/ThirdSection';

function About() {
  const observationRef1 = useRef(null);
  const observationRef2 = useRef(null);
  const observationRef3 = useRef(null);
  const [isVisibleHeaderLogo, setIsVisibleHeaderLogo] = useState(false);
  const [isHeaderBlack, setIsHeaderBlack] = useState(true);
  const scrollHeight = useThrottleScroll(10, 0, 400);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.length === 1) {
          if (entries[0].target.className === 'first-section') {
            setIsHeaderBlack(entries[0]?.isIntersecting);
            setIsVisibleHeaderLogo(!entries[0].isIntersecting);
          } else if (entries[0].target.className === 'second-setion') {
            setIsHeaderBlack(entries[0]?.isIntersecting);
          } else if (entries[0].target.className === 'third-section') {
            setIsHeaderBlack(entries[0]?.isIntersecting);
          }
        }
      },
      {
        threshold: 0,
      },
    );
    if (observationRef1.current && observationRef3.current) {
      observer.observe(observationRef1.current);
      observer.observe(observationRef2.current);
      observer.observe(observationRef3.current);
    }
  }, []);

  return (
    <>
      <Header
        isBackGroundBlack={isHeaderBlack}
        isVisibleHeaderLogo={isVisibleHeaderLogo}
      />
      <div className="first-section" ref={observationRef1}>
        <FirstSection
          isVisibleHeaderLogo={isVisibleHeaderLogo}
          scrollHeight={scrollHeight}
        />
      </div>
      <div className="second-section" ref={observationRef2}>
        <SecondSection />
      </div>
      <div className="third-section" ref={observationRef3}>
        <ThirdSection />
      </div>
    </>
  );
}

export default About;
