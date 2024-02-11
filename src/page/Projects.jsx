import React from 'react';
import Title from '../components/projects/title';
import Content from '../components/projects/content';
import Header from '../components/common/Header';
import styled from 'styled-components';
import backgroundBG from '../assets/icon/projectsBG.png';
import Footer from '../components/common/Footer';

function Projects() {
  return (
    <ProjectsWrapper>
      <Header />
      <ContentWrapper>
        <Title />
        <Content />
      </ContentWrapper>
      <BackgroundImage src={backgroundBG} />

      <Footer />
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
  z-index: 999;
  height: auto;
`;

export default Projects;
