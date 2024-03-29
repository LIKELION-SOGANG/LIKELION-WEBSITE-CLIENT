import React from 'react';
import styled from 'styled-components';
import { useMousePosition } from '../../util/MouseContextProvider';
import { motion } from 'framer-motion';

const contacts = [
  {
    name: '(instagram)',
    url: 'https://www.instagram.com/likelion_sg',
    display: '@likelion_sg ↘',
  },
  {
    name: '(github)',
    url: 'https://github.com/likelionsg',
    display: 'likelionsg ↘',
  },
  {
    name: '(email)',
    url: 'mailto:sogang@likelion.org',
    display: 'sogang@likelion.org ↘',
  },
  {
    name: '(likelion univ.)',
    url: 'https://likelion.university/',
    display: 'https://likelion.university/ ↘︎',
  },
];

function SecondSection() {
  const { textEnter, textLeave } = useMousePosition();

  return (
    <>
      <SecondSectionWrapper>
        <ContactsContainer>
          {contacts.map(({ name, url, display }) => (
            <ContactContainer key={name}>
              <TopText>{name}</TopText>
              <BottomText
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                href={url}
                target="_blank"
              >
                {display}
              </BottomText>
            </ContactContainer>
          ))}
        </ContactsContainer>
      </SecondSectionWrapper>
    </>
  );
}

const SecondSectionWrapper = styled.div`
  background-color: white;
`;

const ContactsContainer = styled.div`
  width: calc(100% - 20rem);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10vw;
  padding-bottom: 20rem;
  @media (max-width: 768px) {
    width: calc(100% - 5rem);
    padding-bottom: 10rem;
    gap: 15vw;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
`;

const TopText = styled.div`
  font-family: 'PP-Editorial';
  font-size: 1.5vw;
  font-weight: 400;
  color: black;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const BottomText = styled(motion.a)`
  font-family: 'PP-Editorial';
  font-size: 3.5vw;
  font-weight: 400;
  color: black;
  &:after {
    content: '';
    display: block;
    transform: scaleX(0);
    border-bottom: 2px solid black;
    transition: transform 250ms ease-in-out;
  }
  &:hover {
    &:after {
      transform: scaleX(1);
      transform-origin: 0% 50%;
    }
  }
  @media (max-width: 768px) {
    font-size: 6vw;
  }
`;

export default SecondSection;
