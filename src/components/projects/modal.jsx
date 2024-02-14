import React, { useState } from 'react';
import styled from 'styled-components';
import Space from './../../util/Space';
import CloseIcon from './../../assets/icon/ph_x-light.svg';
import linkIcon from '../../assets/icon/link.svg';
const ProjectModal = ({ project, closeModal, generation, setIsModalOpen }) => {
  const { title, year, team_name, member_list, project_image, content, url } =
    project;

  return (
    <ModalWrapper>
      <ModalOverlay>
        <CloseButton
          onClick={() => {
            console.log('click!');
            setIsModalOpen(false);
          }}
        />
        <ModalContent>
          <Space height={'4.7rem'} />
          <ProjectTitle>{title}</ProjectTitle>
          <Space height={'0.9rem'} />
          <ProjectDetails>{`${generation} | ${year} `}</ProjectDetails>
          <Space height={'1.2rem'} />
          <Team>Team {`${team_name} `}</Team>
          <Member>{member_list}</Member>
          <Space height={'3rem'} />
          <ProjectImage $url={project_image} />
          <Space height={'3rem'} />
          <Description>{content}</Description>
          <Space height={'1rem'} />
        </ModalContent>
        {url && (
          <LinkWrapper>
            <ProjectLink href={url} target="_blank" rel="noopener noreferrer">
              <LinkIcon src={linkIcon} />
              <span>Link</span>
            </ProjectLink>
          </LinkWrapper>
        )}
      </ModalOverlay>
    </ModalWrapper>
  );
};
const ModalWrapper = styled.section`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalOverlay = styled.div`
  width: 40%;
  min-width: 50rem;
  padding: 3rem 3.4rem;
  height: calc(100vh - 12rem);
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: white;
  border-radius: 1rem;
  backdrop-filter: blur(25px);
  filter: drop-shadow(0px 4px 100px rgba(0, 0, 0, 0.5));
`;

const ModalContent = styled.div`
  border-radius: 8px;
  position: relative;
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
  font-size: 4.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  overflow-wrap: break-word;
  text-align: left;
`;

const ProjectDetails = styled.div`
  color: #000;
  font-family: Figtree;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
`;

const ProjectImage = styled.div`
  height: 20rem;
  border-radius: 10px;
  background-image: url(${(props) => props.$url});
  background-size: cover;
  background-position: center;
`;

const Team = styled.div`
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: #000;
  text-align: left;
`;

const Member = styled.div`
  font-weight: 400;
  text-align: left;
  font-size: 1.6rem;
`;
const Description = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-align: left;
  height: 12rem;
  overflow: scroll;
`;

const LinkWrapper = styled.div`
  width: 100%;
  height: 5.3rem;
`;

const LinkIcon = styled.img``;
const ProjectLink = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
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
