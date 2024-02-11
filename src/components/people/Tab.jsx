import React, { useState } from 'react';
import styled from 'styled-components';
import TabContents from './TabContents';

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
`;

const Tabs = () => {
  const tabs = ['6th', '7th', '8th', '9th', '10th', '11th', '12th'];
  const [selectedTab, setSelectedTab] = useState('12th');
  const [selectedData, setSelectedData] = useState(getDataForTab('12th'));

  const handleClick = (tab) => {
    setSelectedTab(tab);

    const data = getDataForTab(tab);
    setSelectedData(data);
  };

  return (
    <>
      <TabContainer>
        {tabs.map((tab) => (
          <TabElement
            key={tab}
            isSelected={tab === selectedTab}
            onClick={() => handleClick(tab)}
          >
            {tab}
          </TabElement>
        ))}
      </TabContainer>
      <TabContents data={selectedData} />
    </>
  );
};

const dummyData = {
  '6th': {},
  '7th': {},
  '8th': {},
  '9th': {},
  '10th': {},
  '11th': {
    generation: '11th',
    adult_lion: [
      {
        id: 3,
        name: '이종미',
        part: 'Back-End',
        emoji: 'https://avatars.githubusercontent.com/u/87219998?v=4',
        generation_id: 2,
      },
      {
        id: 4,
        name: '한우석',
        part: 'Front-End',
        emoji: 'https://avatars.githubusercontent.com/u/128376848?v=4',
        generation_id: 2,
      },
    ],
    baby_lion: [
      {
        id: 4,
        name: '김규빈',
        part: 'Back-End',
        generation_id: 2,
      },
      {
        id: 3,
        name: '김민지',
        part: 'Front-End',
        generation_id: 2,
      },
      {
        id: 5,
        name: '정태현',
        part: 'Back-End',
        generation_id: 2,
      },
    ],
  },
  '12th': {
    generation: '12th',
    adult_lion: [
      {
        id: 1,
        name: '임정연',
        part: 'Back-End',
        emoji: 'https://avatars.githubusercontent.com/u/128376848?v=4',
        generation_id: 11,
      },
      {
        id: 2,
        name: '정인영',
        part: 'Front-End',
        emoji: 'https://avatars.githubusercontent.com/u/87219998?v=4',
        generation_id: 11,
      },
      {
        id: 3,
        name: '김유이',
        part: 'Back-End',
        emoji: 'https://avatars.githubusercontent.com/u/74279249?v=4',
        generation_id: 11,
      },
      {
        id: 4,
        name: '장세환',
        part: 'Front-End',
        emoji: 'https://avatars.githubusercontent.com/u/61905053?v=4',
        generation_id: 11,
      },
      {
        id: 5,
        name: '이선명',
        part: 'Front-End',
        emoji: 'https://avatars.githubusercontent.com/u/112926965?v=4',
        generation_id: 11,
      },
      {
        id: 6,
        name: '정고은',
        part: 'Front-End',
        emoji: 'https://avatars.githubusercontent.com/u/120074533?v=4',
        generation_id: 11,
      },
      {
        id: 7,
        name: '오은택',
        part: 'Front-End',
        emoji: 'https://avatars.githubusercontent.com/u/87219998?v=4',
        generation_id: 11,
      },
    ],
    baby_lion: [
      {
        id: 4,
        name: '김규빈',
        part: 'Back-End',
        generation_id: 2,
      },
      {
        id: 3,
        name: '김민지',
        part: 'Front-End',
        generation_id: 2,
      },
      {
        id: 5,
        name: '정태현',
        part: 'Back-End',
        generation_id: 2,
      },
    ],
  },
};

function getDataForTab(tab) {
  return dummyData[tab];
}

export default Tabs;
