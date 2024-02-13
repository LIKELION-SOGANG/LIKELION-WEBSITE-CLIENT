import React, { useEffect } from 'react';
import Title from '../components/projects/title';
import Content from '../components/projects/content';
import Header from '../components/common/Header';
import styled from 'styled-components';
import backgroundBG from '../assets/icon/projectsBG.png';
import Footer from '../components/common/Footer';
import { instance } from '../api/axios';
import useMediaQuery from '../hooks/useMediaQuery';
import MobileHeader from '../components/common/MobileHeader';
import MobileFooter from '../components/common/MobileFooter';

function Projects() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await instance.get('project/3');
      console.log(res);
    };
    fetchData();
  }, []);
  const isMobileScreen = useMediaQuery('(max-width: 768px)');
  return (
    <ProjectsWrapper>
      {isMobileScreen ? <MobileHeader /> : <Header />}
      <ContentWrapper>
        <Title />
        <Content />
      </ContentWrapper>
      <BackgroundImage src={backgroundBG} />
      {isMobileScreen ? <MobileFooter /> : <Footer />}
    </ProjectsWrapper>
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
