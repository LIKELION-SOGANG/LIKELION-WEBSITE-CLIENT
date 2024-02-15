import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectInfo from './projectInfo';
import Space from '../../util/Space';
import { projectList } from '../../api/projectList';
function Content() {
  const tabs = ['10th', '11th', '12th'];
  const [selectedTab, setSelectedTab] = useState('11th');
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [projectId, setProjectId] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let generationId;
        switch (selectedTab) {
          case '12th':
            generationId = 2;
            break;
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

  return (
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
      <Space height={'6.4rem'} />
      {selectedProjects.length === 0 ? (
        <ProjectInfoWrapper>
          <ComingSoon>Coming Soon!</ComingSoon>
          <ProjectSoon>곧 아카이빙 될 예정입니다.</ProjectSoon>
        </ProjectInfoWrapper>
      ) : (
        <ProjectContainer>
          {selectedProjects.map((project) => (
            <ProjectInfo
              key={project.id}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              selectedProjects={project}
              generation={selectedTab}
            />
          ))}
        </ProjectContainer>
      )}
      <Space height={'28.1rem'} />
    </SecondSectionWrapper>
  );
}

const SecondSectionWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabElement = styled.div`
  width: 57px;
  height: 35px;
  border: ${(props) =>
    props.isSelected ? '1px solid transparent' : '1px solid white'};
  border-radius: 1rem;
  font-family: 'PP-Editorial';
  font-size: 2.25rem;
  font-style: italic;
  font-weight: 400;
  background-color: ${(props) => (props.isSelected ? 'white' : 'transparent')};
  color: ${(props) => (props.isSelected ? '#999' : 'white')};
  cursor: pointer;
  margin-right: 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 0 8px 0;
`;
const ProjectInfoWrapper = styled.div``;
const ProjectSoon = styled.h2`
  color: #fff;
  font-family: Figtree;
  font-style: normal;
  line-height: normal;
  font-weight: 400;
  font-size: 1.6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
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

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  gap: 2rem;
  & > div {
    width: 25%;
    margin-bottom: 7.8rem;
  }

  & > div:nth-child(3n + 1):nth-child(odd) {
    margin-left: 5%;
  }

  & > div:nth-child(3n + 1):nth-child(even) {
    margin-left: 18%;
  }
`;

export default Content;
