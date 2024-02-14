import React from 'react';
import styled from 'styled-components';
import CloseIcon from './../../assets/icon/ph_x-light.svg';
import Space from '../../util/Space';
import linkIcon from './../../assets/icon/ion_link.svg';

function MobileModal({ projectList, generation, projectId, setIsModalOpen }) {
  const selectedProject = projectList.find(
    (project) => project.id === projectId,
  );
  const { title, year, team_name, member_list, project_image, content, url } =
    selectedProject;
  return (
    <DetailWrapper>
      <CloseButton
        onClick={() => {
          setIsModalOpen(false);
        }}
      />
      <ModalContent>
        <Space height={'1.1rem'} />
        <ProjectTitle>{`${title}`}</ProjectTitle>
        <Space height={'1.1rem'} />
        <ProjectDetails>{`${generation} | ${year} `}</ProjectDetails>
        <Space height={'1.2rem'} />
        <Team>
          Team {`${team_name} `}
          <br />
          {`${member_list}`}
        </Team>
        <Space height={'3rem'} />
        <ProjectImage src={project_image} />
        <Space height={'3rem'} />
        <Description>{`${content}`}</Description> 
        {url && (
          <ProjectLink href={url} target="_blank" rel="noopener noreferrer">
            <img src={linkIcon} />
            <Space width={'0.8rem'} />
            Link
          </ProjectLink>
        )}
      </ModalContent>
    </DetailWrapper>
  );
}
const DetailWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999;
  height: 100vh;
  padding: 3rem;
  background-color: white;
`;

const ModalContent = styled.div`
  background: #fff;
  height: auto;
  box-sizing: border-box;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 5.3rem;
  right: 3rem;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  pointer-events: auto;
  img {
    width: 100%;
    height: 100%;
  }
  background-image: url(${CloseIcon});
  background-size: cover;
`;

const ProjectTitle = styled.h2`
  color: #000;
  width: 33rem;
  font-family: Figtree;
  font-weight: 700;
  margin-bottom: 0.9rem;
  font-size: 3.6rem;
  font-style: normal;
  line-height: normal;
  overflow-wrap: break-word;
`;

const ProjectDetails = styled.div`
  color: #000;
  font-family: Figtree;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 1.2rem;
`;

const ProjectImage = styled.img`
  width: 333px;
  height: 201px;
  max-height: 300px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 1.2rem;
`;

const Team = styled.div`
  font-family: Pretendard;
  color: #000;
  margin-bottom: 0.8rem;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Description = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  height: 12rem;
  overflow-y: scroll;
`;

const ProjectLink = styled.a`
  width: 333px;
  height: 53px;
  display: flex;
  align-items: center;
  padding: 1.2rem 13.4rem;
  background-color: #fff;
  color: #000;
  border: 2px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-decoration: none;
  font-family: Figtree;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
  cursor: pointer;
  position: fixed;
  bottom: 0rem;
`;
export default MobileModal;
