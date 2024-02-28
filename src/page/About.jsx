import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/common/Header';
import FirstSection from '../components/about/FirstSection';
import SecondSection from '../components/about/SecondSection';
import useThrottleScroll from '../hooks/useThrottleScroll';

function About() {
  const observationRef1 = useRef(null);
  const observationRef2 = useRef(null);
  const [isVisibleHeaderLogo, setIsVisibleHeaderLogo] = useState(false);
  const [isHeaderBlack, setIsHeaderBlack] = useState(true);
  const scrollHeight = useThrottleScroll(3, 0, 400);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          setIsHeaderBlack(false);
          setIsVisibleHeaderLogo(true);
        } else {
          setIsHeaderBlack(true);
          setIsVisibleHeaderLogo(false);
        }
      },
      {
        threshold: 0,
      },
    );
    if (observationRef1.current) {
      observer.observe(observationRef1.current);
    }
  }, []);

  return (
    <>
      <Header
        isBackGroundBlack={isHeaderBlack}
        isVisibleHeaderLogo={isVisibleHeaderLogo}
      />
      <div ref={observationRef1}>
        <FirstSection
          isVisibleHeaderLogo={isVisibleHeaderLogo}
        />
      </div>
      <SecondSection />
    </>
  );
}

export default About;
