import React, { useState } from 'react';
import styled from 'styled-components';
import Space from '../../util/Space';
import ProjectModal from './modal';
const ProjectInfo = ({ selectedProjects, generation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  console.log(isModalOpen);

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
          <ProjectImage
            onClick={openModal}
            src={selectedProjects.project_image}
            alt={selectedProjects.title}
          />
        </ProjectInfoWrapper>
      </>
    )
  );
};
const ProjectInfoWrapper = styled.div`
  width: 360px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 7.8rem;
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
  object-fit: cover;
`;

export default ProjectInfo;
