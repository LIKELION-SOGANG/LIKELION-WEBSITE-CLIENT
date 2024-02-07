import React, { useEffect, useRef } from 'react';
import Header from '../components/common/Header';
import FirstSection from '../components/about/FirstSection';
import SecondSection from '../components/about/SecondSection';

function About() {
  const observationRef = useRef();

  useEffect(() => {}, []);
  return (
    <>
      <FirstSection />
      <SecondSection ref={observationRef} />
    </>
  );
}

export default About;
