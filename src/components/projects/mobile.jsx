import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Space from '../../util/Space';
import { projectList } from '../../api/projectList';
import ProjectDetail from './projectDetail';
import backgroundBG from './../../assets/icon/Cone_01 3.png';
import { useNavigate } from 'react-router-dom';
function Mobile() {
  const tabs = ['11th', '10th', '9th', '8th', '7th', '6th'];
  const [selectedTab, setSelectedTab] = useState('11th');
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [projectId, setProjectId] = useState(3);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let generationId;
        switch (selectedTab) {
          case '11th':
            generationId = 1;
            break;
          case '10th':
            generationId = 3;
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
    navigate(`/projects/projectDetail/${projectId}`, {
      state: {
        projectList: selectedProjects,
        generation: selectedTab,
        projectId: projectId,
      },
    });
  };
  //console.log(selectedProjects, selectedTab);

  return (
    <MobileWrapper>
      <FirstSectionWrapper>
        <Space height={'30rem'} />
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
        <ProjectContainer>
          {selectedProjects.map((project) => (
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
              <ProjectImage src={project.project_image} alt={project.title} />
            </ProjectInfoWrapper>
          ))}
        </ProjectContainer>
      </SecondSectionWrapper>
    </MobileWrapper>
  );
}
const MobileWrapper = styled.div`
  background-color: black;
`;
const FirstSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  background-image: url ${backgroundBG};
  //   filter: blur(25px);
  object-fit: cover;
`;
const Title = styled.h1`
  font-family: 'PP-Editorial';
  font-weight: 400;
  font-style: italic;
  font-size: 96px;
  color: white;
  text-transform: capitalize;
  margin-top: 33.1rem;
  margin-bottom: 40.7rem;
`;

const SecondSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 18rem;
`;
const TabContainer = styled.div`
  margin-right: 2rem;
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
  margin: 1px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 0 8px 0;
`;
const Line = styled.div`
  width: 0.5px;
  height: 730px;
  background-color: #b7b7b7;
  margin-right: 2rem;
`;
const ProjectContainer = styled.div``;
const ProjectInfoWrapper = styled.div`
  margin-bottom: 6rem;
`;
const ProjectTitle = styled.h2`
  color: #fff;
  font-family: Figtree;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 30rem;
`;

const ProjectDetails = styled.div`
  color: #fff;
  font-family: Figtree;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;

const ProjectImage = styled.img`
  width: 360px;
  height: 202px;
`;

export default Mobile;
