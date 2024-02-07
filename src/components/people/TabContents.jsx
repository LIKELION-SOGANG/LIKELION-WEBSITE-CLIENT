import React from 'react';
import styled from 'styled-components';
import DividerWithText from './DividerWithText';

const ContentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  margin-top: 6rem;
  margin-bottom: 20rem;
  position: relative;
`;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 8rem;

  &:last-child {
    margin-right: 0;
  }
`;

const Emoji = styled.img`
  width: 12rem;
  height: 12rem;
  margin-bottom: 2rem;
`;

const Name = styled.div`
  font-family: 'Pretendard';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const Info = styled.div`
  font-family: 'Pretendard';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
`;

const BabyLion = styled.div`
  font-family: 'Pretendard';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

const TabContents = ({ data }) => {
  if (!data) return null;

  const { adult_lion, baby_lion } = data;

  return (
    <>
      <DividerWithText text="운영진" />
      <ContentsContainer>
        {adult_lion?.map((member) => (
          <Member key={member.id}>
            <Emoji src={member.emoji} alt={member.name} />
            <Name>{member.name}</Name>
            <Info>
              {member.generation_id}th / {member.part}
            </Info>
          </Member>
        ))}
      </ContentsContainer>
      <DividerWithText text="아기사자" />
      <ContentsContainer>
        {baby_lion?.map((lion) => (
          <Member key={lion.id}>
            <BabyLion>{lion.name}</BabyLion>
          </Member>
        ))}
      </ContentsContainer>
    </>
  );
};

export default TabContents;
