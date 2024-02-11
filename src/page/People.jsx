import React from 'react';
import Header from '../components/common/Header';
import FirstSection from '../components/people/FirstSection';
import SecondSection from '../components/people/SecondSection';
import Footer from '../components/common/Footer';

function People() {
  return (
    <>
      <Header isBackGroundBlack={false} />
      <FirstSection />
      <SecondSection />
      <Footer isBackgroundBlack={false} />
    </>
  );
}

export default People;
