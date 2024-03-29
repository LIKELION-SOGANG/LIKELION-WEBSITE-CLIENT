import React from 'react';
import styled from 'styled-components';
import CloseIcon from './../../assets/icon/ph_x-light.svg';
import Space from '../../util/Space';
import linkIcon from './../../assets/icon/ion_link.svg';
import { formattedMessage } from '../../util/formattedMessage';

function MobileModal({
  projectList,
  generation,
  projectId,
  setIsModalOpen,
  openScroll,
}) {
  const selectedProject = projectList.find(
    (project) => project.id === projectId,
  );
  const { title, year, team_name, member_list, project_image, content, url } =
    selectedProject;
  let generationText;
  switch (generation) {
    case 1:
      generationText = '11th';
      break;
    case 3:
      generationText = '10th';
      break;
    case 4:
      generationText = '9th';
      break;
    default:
      generationText = '11th';
  }
  return (
    <DetailWrapper>
      <CloseButton
        onClick={() => {
          setIsModalOpen(false);
          openScroll();
        }}
      />
      <ModalContent>
        <Space height={'1.1rem'} />
        <ProjectTitle>{`${title}`}</ProjectTitle>
        <Space height={'1.1rem'} />
        <ProjectDetails>{`${generationText} | ${year} `}</ProjectDetails>
        <Space height={'1.2rem'} />
        <Team>
          Team {`${team_name} `}
          <br />
          {`${member_list}`}
        </Team>
        <Space height={'3rem'} />
        <ProjectImage src={project_image} />
        <Space height={'3rem'} />
        <Description>{formattedMessage(content)}</Description>
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
  z-index: 999;
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
  top: 5rem;
  right: 3.5rem;
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
  /* width: 33rem; */
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
  width: auto;
  height: auto;
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
  height: 13vh;
  overflow-y: scroll;
`;

const ProjectLink = styled.a`
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  border: 2px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-decoration: none;
  font-family: Figtree;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  cursor: pointer;
  position: fixed;
  bottom: 2rem;
  width: calc(100% - 6rem);
`;
export default MobileModal;
