import React from 'react';
import Header from '../components/common/Header';
import FirstSection from '../components/people/FirstSection';
import SecondSection from '../components/people/SecondSection';
import Footer from '../components/common/Footer';
import { motion } from 'framer-motion';

function People() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header isBackGroundBlack={false} />
      <FirstSection />
      <SecondSection />
      <Footer isBackgroundBlack={false} />
    </motion.div>
  );
}

export default People;
