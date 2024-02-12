import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import FirstSection from '../components/contact/FirstSection';
import SecondSection from '../components/contact/SecondSection';
import { motion } from 'framer-motion';
import { instance } from '../api/axios';

function Contact() {
  useEffect(() => {
    instance.get('application');
  }, []);
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
    </motion.div>
  );
}

export default Contact;
