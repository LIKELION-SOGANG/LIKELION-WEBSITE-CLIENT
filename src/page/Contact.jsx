import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import FirstSection from '../components/contact/FirstSection';
import SecondSection from '../components/contact/SecondSection';
import { motion } from 'framer-motion';
import { instance } from '../api/axios';
import useMediaQuery from '../hooks/useMediaQuery';
import MobileFooter from '../components/common/MobileFooter';
import Footer from '../components/common/Footer';
import MobileHeader from '../components/common/MobileHeader';

function Contact() {
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

export default Contact;
