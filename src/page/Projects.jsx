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
        <ProjectsWrapper $imgUrl={backgroundBG} src={backgroundBG}>
          <Header />
          <ContentWrapper>
            <Title />
            <Content />
          </ContentWrapper>
          <Footer />{' '}
        </ProjectsWrapper>
      )}
    </motion.div>
  );
}

const ProjectsWrapper = styled.div`
  background-color: black;
  display: flex;
  min-height: 230vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$imgUrl});
  background-position: center;
`;

const BackgroundImage = styled.img`
  filter: blur(25px);
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 1rem;
  left: 0;
  opacity: 0.6;
  z-index: -9;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: auto;
`;

export default Projects;
