import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/common/Header';
import FirstSection from '../components/about/FirstSection';
import SecondSection from '../components/about/SecondSection';
import useThrottleScroll from '../hooks/useThrottleScroll';
import ThirdSection from '../components/about/ThirdSection';
import FourthSection from '../components/about/FourthSection';
import FifthSection from '../components/about/FifthSection';
import useMediaQuery from '../hooks/useMediaQuery';
import MobileHeader from '../components/common/MobileHeader';

function About() {
  const observationRef1 = useRef(null);
  const observationRef2 = useRef(null);
  const observationRef3 = useRef(null);
  const observationRef4 = useRef(null);
  const observationRef5 = useRef(null);
  const [isVisibleHeaderLogo, setIsVisibleHeaderLogo] = useState(false);
  const [isHeaderBlack, setIsHeaderBlack] = useState(true);
  const scrollHeight = useThrottleScroll(10, 0, 400);
  // 모바일 화면여부
  const isMobileScreen = useMediaQuery('(max-width: 768px)');
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
          } else if (entries[0].target.className === 'fourth-section') {
            console.log('!');
            setIsHeaderBlack(!entries[0]?.isIntersecting);
          } else if (entries[0].target.className === 'fifth-section') {
            setIsHeaderBlack(!entries[0]?.isIntersecting);
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
      observer.observe(observationRef4.current);
      observer.observe(observationRef5.current);
    }
  }, []);

  return (
    <>
      {isMobileScreen ? (
        <MobileHeader
          isBackGroundBlack={isHeaderBlack}
          isVisibleHeaderLogo={isVisibleHeaderLogo}
        />
      ) : (
        <Header
          isBackGroundBlack={isHeaderBlack}
          isVisibleHeaderLogo={isVisibleHeaderLogo}
        />
      )}

      {/* about1~2 */}
      <div className="first-section" ref={observationRef1}>
        <FirstSection
          isVisibleHeaderLogo={isVisibleHeaderLogo}
          scrollHeight={scrollHeight}
        />
      </div>
      {/* about3~6 */}
      <div className="second-section" ref={observationRef2}>
        <SecondSection />
      </div>
      {/* about7~10 */}
      <div className="third-section" ref={observationRef3}>
        <ThirdSection />
      </div>
      {/* about9 */}
      <div className="fourth-section" ref={observationRef4}>
        <FourthSection isBackGroundBlack={isHeaderBlack} />
      </div>
      <div className="fifth-section" ref={observationRef5}>
        <FifthSection />
      </div>
    </>
  );
}

export default About;
