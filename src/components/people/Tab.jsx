import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TabContents from './TabContents';
import { instance } from '../../api/axios';

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const TabElement = styled.div`
  font-family: 'PP-Editorial';
  font-size: ${(props) => (props.isSelected ? '6rem' : '2.25rem')};
  font-style: italic;
  font-weight: 400;
  color: ${(props) => (props.isSelected ? 'black' : '#B7B7B7')};
  margin-bottom: ${(props) => (props.isSelected ? '-0.75rem' : '0rem')};
  cursor: pointer;
  padding: 1rem;
  @media (max-width: 768px) {
    font-size: ${(props) => (props.isSelected ? '3.5rem' : '2rem')};
    margin-bottom: ${(props) => (props.isSelected ? '-0.25rem' : '0rem')};
    padding: 0.5rem;
  }
`;

const Tabs = () => {
  const [generations, setGenerations] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  const fetchData = async (generation) => {
    try {
      const response = await instance.get(`/people/${generation}`);
      return response.data.data;
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = async (generationId) => {
    setSelectedTab(generationId);
    const data = await fetchData(generationId);
    setSelectedData(data);
  };

  const fetchGenerations = async () => {
    try {
      const response = await instance.get('/generation');
      setGenerations(response.data.data);
      if (response.data.data.length > 0) {
        const firstGen = response.data.data.find((gen) => gen.id === 7);
        if (firstGen) {
          handleClick(firstGen.id);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGenerations();
  }, []);

  return (
    <>
      <TabContainer>
        {generations.map((gen) => (
          <TabElement
            key={gen.id}
            isSelected={gen.id === selectedTab}
            onClick={() => handleClick(gen.id)}
          >
            {gen.number}
            {gen.suffix}
          </TabElement>
        ))}
      </TabContainer>
      <TabContents data={selectedData} />
    </>
  );
};

export default Tabs;
