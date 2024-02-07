import React from 'react';
import styled from 'styled-components';

const Section = ({ title, data, renderItem }) => {
  return (
    <SectionContainer>
      <Topic>{title}</Topic>
      <Body>
        {data.map((item) => (
          <Item key={item.title}>{renderItem(item)}</Item>
        ))}
      </Body>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  width: 97rem;
  height: 18rem;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15rem;
`;

const Topic = styled.div`
  text-align: center;
  font-size: 3.2rem;
  color: var(--Main, #000);
  font-family: 'PP Editorial New';
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.8rem;
  position: relative;
`;

const Item = styled.div`
  width: 22.1rem;
  height: 10rem;
  margin-top: 3.9rem;
  padding: 1.7rem 2.1rem;
  border-radius: 1rem;
  bottom: 0;
  align-items: flex-start;
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
  background: #f4f4f4;
`;

export default Section;
