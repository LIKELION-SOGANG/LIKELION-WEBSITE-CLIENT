import React from 'react';
import Header from '../components/common/Header';
import FirstSection from '../components/people/FirstSection';
import SecondSection from '../components/people/SecondSection';
import Footer from '../components/common/Footer';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import MobileHeader from '../components/common/MobileHeader';
import MobileFooter from '../components/common/MobileFooter';

function People() {
  const isMobileScreen = useMediaQuery('(max-width: 768px)');
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {isMobileScreen ? (
        <MobileHeader isBackGroundBlack={false} />
      ) : (
        <Header isBackGroundBlack={false} />
      )}

      <FirstSection />
      <SecondSection />
      {isMobileScreen ? (
        <MobileFooter isBackgroundBlack={false} />
      ) : (
        <Footer isBackgroundBlack={false} />
      )}
    </motion.div>
  );
}

export default People;
