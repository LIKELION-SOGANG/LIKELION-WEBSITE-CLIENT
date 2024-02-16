import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Space from '../../util/Space';
import { projectList } from '../../api/projectList';
import backgroundBG from './../../assets/icon/Cone_01 3.png';
import { useNavigate } from 'react-router-dom';
import MobileHeader from '../common/MobileHeader';
import MobileFooter from '../common/MobileFooter';
import MobileModal from './MobileModal';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
function Mobile() {
  const tabs = ['12th', '11th', '10th'];
  const [selectedTab, setSelectedTab] = useState('11th');
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [projectId, setProjectId] = useState(3);
  const { lockScroll, openScroll } = useBodyScrollLock();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let generationId;
        switch (selectedTab) {
          case '12th':
            generationId = 7;
            break;
          case '11th':
            generationId = 6;
            break;
          case '10th':
            generationId = 5;
            break;
          case '9th':
            generationId = 4;
            break;
          default:
            generationId = 3;
        }
        const data = await projectList(generationId);
        setSelectedProjects(data);
        setProjectId(generationId);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchData();
  }, [selectedTab]);
  const handleClick = (tab) => {
    setSelectedTab(tab);
  };
  const handleProjectClick = (projectId) => {
    // navigate(`/projects/projectDetail/${projectId}`, {
    //   state: {
    //     projectList: selectedProjects,
    //     generation: selectedTab,
    //     projectId: projectId,
    //   },
    // });
    setIsModalOpen(true);
    lockScroll();
    setProjectId(projectId);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <MobileWrapper>
      <MobileHeader />
      <FirstSectionWrapper>
        <Title>Our Projects</Title>
      </FirstSectionWrapper>
      <SecondSectionWrapper>
        <TabContainer>
          {tabs.map((tab) => (
            <TabElement
              key={tab}
              isSelected={tab === selectedTab}
              onClick={() => handleClick(tab)}
            >
              {tab}
            </TabElement>
          ))}
        </TabContainer>
        <Line />
        {isModalOpen && (
          <MobileModal
            setIsModalOpen={setIsModalOpen}
            projectList={selectedProjects}
            projectId={projectId}
            openScroll={openScroll}
          />
        )}
        <ProjectContainer>
          {selectedProjects.length === 0 ? (
            <ProjectInfoWrapper>
              <ProjectSoon>Coming soon</ProjectSoon>
            </ProjectInfoWrapper>
          ) : (
            selectedProjects.map((project) => (
              <ProjectInfoWrapper
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                <Space height={'8px'} />
                <ProjectDetails>
                  <div>
                    {`${selectedTab}`} | {`${project.year}`}
                  </div>
                </ProjectDetails>
                <Space height={'17px'} />
                <ProjectImageBox $url={project.project_image} />
              </ProjectInfoWrapper>
            ))
          )}
        </ProjectContainer>
      </SecondSectionWrapper>
      <BackgroundImage src={backgroundBG} />
      <MobileFooter />
    </MobileWrapper>
  );
}
const MobileWrapper = styled.div`
  background-color: black;
  position: relative;
  z-index: 100;
`;

const FirstSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: -2;
`;
const BackgroundImage = styled.img`
  filter: blur(200px);
  width: 100vw;
  height: 80vh;
  object-fit: cover;
  position: absolute;
  top: 40rem;
  left: 50px;
  z-index: -100;
`;
const Title = styled.h1`
  font-family: 'PP-Editorial';
  font-size: 48px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  color: white;
  text-transform: capitalize;
  z-index: 2;
`;

const SecondSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  justify-content: center;
  margin-bottom: 18rem;
`;
const ProjectImageBox = styled.div`
  background-image: url(${(props) => props.$url});
  width: calc(100% - 3rem);
  height: 15.5rem;
  background-size: cover;
  background-position: center;
`;

const TabContainer = styled.div`
  margin-right: 2rem;
  margin: 0 10px;
`;
const TabElement = styled.div`
  color: white;
  width: 57px;
  height: 35px;
  font-family: 'PP Editorial New';
  font-size: 2.25rem;
  font-style: italic;
  font-weight: ${(props) => (props.isSelected ? '400' : '200;')}
  color: ${(props) => (props.isSelected ? 'white' : '#686868')};
  cursor: pointer;
  margin: 0.1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 0 8px 0;
`;
const Line = styled.div`
  width: 0.5px;
  height: auto;
  background-color: #b7b7b7;
  margin-right: 2rem;
`;
const ProjectContainer = styled.div`
  margin-right: 1rem;
  width: calc(100%);
`;
const ProjectInfoWrapper = styled.div`
  margin-bottom: 6rem;
  cursor: pointer;
`;
const ProjectTitle = styled.h2`
  color: #fff;
  font-family: Figtree;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 30rem;
`;
const ProjectSoon = styled(ProjectTitle)`
  font-weight: 200;
  width: 100%;
  font-family: PP-Editorial;
  font-style: italic;
`;
const ComingSoon = styled.h1`
  font-weight: 400;
  font-size: 4rem;
  width: 100%;
  font-family: PP-Editorial;
  font-style: italic;
  color: white;
  display: flex;
  justify-content: center;
  margin: 3rem 0 1rem 0;
`;
const ProjectDetails = styled.div`
  color: #fff;
  font-family: Figtree;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;

const ProjectImage = styled.img`
  height: 20.2rem;
`;

export default Mobile;
