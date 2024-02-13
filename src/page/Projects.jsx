import React, { useEffect } from 'react';
import Title from '../components/projects/title';
import Content from '../components/projects/content';
import Header from '../components/common/Header';
import styled from 'styled-components';
import backgroundBG from '../assets/icon/projectsBG.png';
import Footer from '../components/common/Footer';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import Mobile from '../components/projects/mobile';
import MobileHeader from '../components/common/MobileHeader';
import MobileFooter from '../components/common/MobileFooter';

function Projects() {
  const isMobileScreen = useMediaQuery('(max-width: 768px)');
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {isMobileScreen ? (
        <Mobile />
      ) : (
        <ProjectsWrapper>
          <Header />
          <ContentWrapper>
            <Title />
            <Content />
          </ContentWrapper>
          <BackgroundImage src={backgroundBG} />
          <Footer />{' '}
        </ProjectsWrapper>
      )}
    </motion.div>
  );
}

const ProjectsWrapper = styled.div`
  height: auto;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
`;

const BackgroundImage = styled.img`
  filter: blur(25px);
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 21rem;
  left: 0;
`;

const ContentWrapper = styled.div`
  position: relative;

  z-index: 2;

  height: auto;
`;

export default Projects;
