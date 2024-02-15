import React, { useState } from 'react';
import styled from 'styled-components';
import Space from '../../util/Space';
import ProjectModal from './modal';
const ProjectInfo = ({ selectedProjects, generation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    selectedProjects && (
      <>
        <ProjectInfoWrapper>
          {isModalOpen && (
            <ProjectModal
              setIsModalOpen={setIsModalOpen}
              project={selectedProjects}
              generation={generation}
            />
          )}
          <ProjectTitle>{selectedProjects.title}</ProjectTitle>
          <Space height={'8px'} />
          <ProjectDetails>
            <div>
              {`${generation}`} | {`${selectedProjects.year}`}
            </div>
          </ProjectDetails>
          <Space height={'17px'} />
          <ProjectImageBox
            onClick={openModal}
            $url={selectedProjects.project_image}
          ></ProjectImageBox>
        </ProjectInfoWrapper>
      </>
    )
  );
};
const ProjectInfoWrapper = styled.div`
  max-width: 100%;
  max-width: 360px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 7.8rem;
`;
const ProjectImageBox = styled.div`
  width: 100%;
  height: 15rem;
  background-image: url(${(props) => props.$url});
  background-size: cover;
  background-position: center;
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
  width: 160px;
  height: 202px;
  object-fit: cover;
`;

export default ProjectInfo;
