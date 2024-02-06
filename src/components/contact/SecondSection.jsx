import React from 'react';
import styled from 'styled-components';

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
    name: '(kakaotalk)',
    url: 'mailto:sogang@likelion.org',
    display: 'inyoungjeong ↘',
  },
  {
    name: '(likelion univ.)',
    url: 'https://likelion.university/',
    display: 'https://likelion.university/ ↘︎',
  },
];

function SecondSection() {
  return (
    <SecondSectionWrapper>
      <ContactsContainer>
        {contacts.map(({ name, url, display }) => (
          <ContactContainer key={name}>
            <TopText>{name}</TopText>
            <BottomText href={url} target="_blank">
              {display}
            </BottomText>
          </ContactContainer>
        ))}
      </ContactsContainer>
    </SecondSectionWrapper>
  );
}

const SecondSectionWrapper = styled.div`
  height: 100vh;
  background-color: white;
`;

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20rem;
  gap: 10rem;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TopText = styled.div`
  font-family: 'PP Editorial New';
  font-size: 2rem;
  font-weight: 400;
  color: black;
`;

const BottomText = styled.a`
  font-family: 'PP Editorial New';
  font-size: 6rem;
  font-weight: 400;
  color: black;
`;

export default SecondSection;
