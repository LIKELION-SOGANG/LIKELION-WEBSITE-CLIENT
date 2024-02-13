import React from 'react';
import styled from 'styled-components';

const Section = ({ title, data, renderItem }) => {
  return (
    <SectionContainer>
      <Topic>{title}</Topic>
      <>
        <Body>
          {data.map((item) => (
            <Item key={item.title}>{renderItem(item)}</Item>
          ))}
        </Body>
      </>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  max-width: 97rem;
  width: 100%;
  // height: 18rem;
  // display: flex;
  flex-direction: column;
  // height: auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 15rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Topic = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 3.2rem;
  color: var(--Main, #000);
  font-family: 'PP-Editorial';
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;

const ItemList = styled.div`
  // display: flex;
  // flex-direction: row;
`;
const Body = styled.div`
  max-width: 97rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2.8rem;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  // max-width: 42.9rem;
  width: 100%;
  font-size: 1.6rem;
  height: 10rem;
  margin-top: 3.9rem;
  padding: 1.7rem;
  border-radius: 1rem;
  bottom: 0;
  align-items: flex-start;
  // gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
  background: #f4f4f4;
  font-family: Pretendard;
  font-weight: 400;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
  }
`;

export default Section;
