import React, { useState } from 'react';
import styled from 'styled-components';
import Space from './../../util/Space';
import CloseIcon from './../../assets/icon/ph_x-light.svg';
import { useNavigate } from 'react-router-dom';
const ProjectModal = ({ project, generation }) => {
  const { title, year, team_name, member_list, project_image, content, url } =
    project;
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <ModalWrapper>
      <ModalOverlay>
        <CloseButton onClick={() => navigate(-1)} />
        <ModalContent>
          <Space height={'9.5rem'} />
          <ProjectTitle>{title}</ProjectTitle>
          <Space height={'0.9rem'} />
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
              Link
            </ProjectLink>
          )}
        </ModalContent>
      </ModalOverlay>
    </ModalWrapper>
  );
};
const ModalWrapper = styled.div``;
const ModalOverlay = styled.div`
  position: fixed;
  top: 60px;
  left: 456px;
  width: 60rem;
  max-height: 862vh;
  padding-bottom: 10rem;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  backdrop-filter: blur(25px);
  filter: drop-shadow(0px 4px 100px rgba(0, 0, 0, 0.5));
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  height: auto;
  max-height: 73.3rem;
  width: 53.7rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const CloseButton = styled.div`
  position: absolute;
  top: 1.8rem;
  right: 1.8rem;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  pointer-events: auto;
  img {
    width: 100%;
    height: 100%;
  }
  background-image: url(${CloseIcon});
  background-size: cover;
  z-index: 999;
`;
const ProjectTitle = styled.h2`
  color: #000;
  font-family: Figtree;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  overflow-wrap: break-word;
`;

const ProjectDetails = styled.div`
  color: #000;
  font-family: Figtree;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ProjectImage = styled.img`
  width: 53.7rem;
  height: 31.4rem;
  border-radius: 10px;
`;

const Team = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #000;
  width: 53.7rem;
  height: 5.3rem;
  text-align: left;
`;

const Description = styled.div`
  width: 53.7rem;
  height: 15rem;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 3rem;
  text-align: left;
  margin-right: 3rem;
`;

const ProjectLink = styled.div`
  width: 53.7rem;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #000;
  font-family: Figtree;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
`;

export default ProjectModal;
