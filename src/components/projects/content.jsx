import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectInfo from './projectInfo';
import Space from '../../util/Space';
function Content() {
  // const tabs = ['6th', '7th', '8th', '9th', '10th', '11th'];
  // const [selectedTab, setSelectedTab] = useState('11th');
  // const [selectedProjects, setSelectedProjects] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`/project/${selectedTab}`);
  //       const data = await response.json();
  //       setSelectedProjects(data.data.project_list || []);
  //     } catch (error) {
  //       console.error('Error fetching project data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [selectedTab]);

  // const handleClick = (tab) => {
  //   setSelectedTab(tab);
  // };
  const tabs = ['6th', '7th', '8th', '9th', '10th', '11th'];
  const [selectedTab, setSelectedTab] = useState('11th');
  const [selectedProjects, setSelectedProjects] = useState(
    getDefaultSelectedProjects(),
  );
  const handleClick = (tab) => {
    setSelectedTab(tab);

    const projects = dummyData[tab] || [];
    setSelectedProjects(projects);
  };

  function getDefaultSelectedProjects() {
    const defaultTab = tabs[5];
    const defaultProjects = dummyData[defaultTab] || [];
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(`/project/${selectedTab}`);
          const data = await response.json();
          setSelectedProjects(data.data.project_list || []);
        } catch (error) {
          console.error('Error fetching project data:', error);
        }
      }

      fetchData();
    }, [selectedTab]);
    return defaultProjects;
  }
  return (
    <SecondSectionWrapper>
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
      <Space height={'6.4rem'} />
      <ProjectContainer>
        {selectedProjects.map((project) => (
          <ProjectInfo key={project.id} selectedProjects={project} />
        ))}
      </ProjectContainer>
      <Space height={'28.1rem'} />
    </SecondSectionWrapper>
  );
}

const SecondSectionWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabElement = styled.div`
  width: 57px;
  height: 35px;
  display: inline-flex;
  border: ${(props) =>
    props.isSelected ? '1px solid transparent' : '1px solid white'};
  border-radius: 1rem;
  font-family: 'PP-Editorial';
  font-size: 2.25rem;
  font-style: italic;
  font-weight: 400;
  background-color: ${(props) => (props.isSelected ? 'white' : 'transparent')};
  color: ${(props) => (props.isSelected ? '#999' : 'white')};
  cursor: pointer;
  padding: 0.5rem 0.625rem;
  margin-right: 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;

  & > div {
    width: 20%;
    margin-bottom: 7.8rem;
  }

  & > div:nth-child(3n + 1):nth-child(odd) {
    margin-left: 64px;
  }

  & > div:nth-child(3n + 1):nth-child(even) {
    margin-left: 318px;
  }
`;

//더미 데이터
const dummyData = {
  '6th': [
    {
      title: 'Project 6A',
      image:
        'https://s3-alpha-sig.figma.com/img/cc33/a89a/15c5943f9cc745c5afdc72931e4f53d9?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jXLFUYgSy71iXHNBFB8gCLJ~fgOu8gcH4GLFK~RrVN8-8iAcVX79-AmOGXYtz46S91zzvKNWYjexd8oDxHRImIVXYAKmFMlh56a3Z8a4wE-M4YIn~vHUoVMbv3X~pkVageJF5LBBckH~Pvm~pb1s2OXNUlo6wuIKybBIl-GABLwUF9rRPyM6NGRlifeYdW5zf7rINxnnkLu1epMN20x3WV442GisXIPBmgDjAiEcmiI9mHDafxfcqpOlJSMBp~-MAhsw9gjCmQqc6raCmk5U4lbbnGAY0Jppf4BFms0VzdMQ-A1HQYlIZ45Vyogr6FEythNvSYEDbum9gjrESwl2Ew__',
      generation: '6th',
      year: 2022,
    },
    {
      title: 'Project 6B',
      image: '/path/to/project6B-image.jpg',
      generation: '6th',
      year: 2022,
    },
    // ...프로젝트
  ],
  '7th': [],
  '8th': [],
  '9th': [],
  '10th': [],
  '11th': [
    {
      title: 'You Check',
      image:
        'https://s3-alpha-sig.figma.com/img/cc33/a89a/15c5943f9cc745c5afdc72931e4f53d9?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jXLFUYgSy71iXHNBFB8gCLJ~fgOu8gcH4GLFK~RrVN8-8iAcVX79-AmOGXYtz46S91zzvKNWYjexd8oDxHRImIVXYAKmFMlh56a3Z8a4wE-M4YIn~vHUoVMbv3X~pkVageJF5LBBckH~Pvm~pb1s2OXNUlo6wuIKybBIl-GABLwUF9rRPyM6NGRlifeYdW5zf7rINxnnkLu1epMN20x3WV442GisXIPBmgDjAiEcmiI9mHDafxfcqpOlJSMBp~-MAhsw9gjCmQqc6raCmk5U4lbbnGAY0Jppf4BFms0VzdMQ-A1HQYlIZ45Vyogr6FEythNvSYEDbum9gjrESwl2Ew__',
      generation: '11th',
      year: 2023,
    },
    {
      title: 'Project 2',
      image:
        'https://s3-alpha-sig.figma.com/img/58f1/3ca5/a1f431480a55c8a7fd5f0d365cefd0aa?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NxvtYcnaIr2-J-TSEebi3fmqj1~zuZWDFW~uiKiKazVppUzeJjcUwZ74c5Eybsvmk3yI3AYxMcJZR2YxRetRw03p7LXYWReVWVaUnRNSt1e~XN4Y61N7iNO2bhE8JomWbY72RqsNpP9FfWQb7oH9on~d4UaWIFgt5nzLDKW3fmnvxD8QN3Y5oI-p7ddeB3tPeHGl7pYKao~sCYgt5kCmET6VZB9vJZZFzCIXktQpxuslhD3gpdqcVyov6hwJHo2zq7qFPLH3HcTCB14XUiNS2cRVKxeASSDhLjqMNervYznSMnx1Q7arzeyNRnKvvWdJ7UqnTXeVXLqC8zxswfikjw__',
      generation: '11th',
      year: 2023,
    },
    {
      title: 'Project 3',
      image:
        'https://s3-alpha-sig.figma.com/img/cc33/a89a/15c5943f9cc745c5afdc72931e4f53d9?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jXLFUYgSy71iXHNBFB8gCLJ~fgOu8gcH4GLFK~RrVN8-8iAcVX79-AmOGXYtz46S91zzvKNWYjexd8oDxHRImIVXYAKmFMlh56a3Z8a4wE-M4YIn~vHUoVMbv3X~pkVageJF5LBBckH~Pvm~pb1s2OXNUlo6wuIKybBIl-GABLwUF9rRPyM6NGRlifeYdW5zf7rINxnnkLu1epMN20x3WV442GisXIPBmgDjAiEcmiI9mHDafxfcqpOlJSMBp~-MAhsw9gjCmQqc6raCmk5U4lbbnGAY0Jppf4BFms0VzdMQ-A1HQYlIZ45Vyogr6FEythNvSYEDbum9gjrESwl2Ew__',
      generation: '11th',
      year: 2023,
    },
    {
      title: 'Project 4',
      image: '/path/to/project6B-image.jpg',
      generation: '11th',
      year: 2023,
    },
    {
      title: 'Project 5',
      image: '/path/to/project6B-image.jpg',
      generation: '11th',
      year: 2023,
    },
    {
      title: '실버캠퍼스',
      year: 2023,
      team_name: '효를 아십니까',
      member_list: '임정연 김민지 송경호 정태현 김규빈',
      project_image:
        'https://s3-alpha-sig.figma.com/img/cc33/a89a/15c5943f9cc745c5afdc72931e4f53d9?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jXLFUYgSy71iXHNBFB8gCLJ~fgOu8gcH4GLFK~RrVN8-8iAcVX79-AmOGXYtz46S91zzvKNWYjexd8oDxHRImIVXYAKmFMlh56a3Z8a4wE-M4YIn~vHUoVMbv3X~pkVageJF5LBBckH~Pvm~pb1s2OXNUlo6wuIKybBIl-GABLwUF9rRPyM6NGRlifeYdW5zf7rINxnnkLu1epMN20x3WV442GisXIPBmgDjAiEcmiI9mHDafxfcqpOlJSMBp~-MAhsw9gjCmQqc6raCmk5U4lbbnGAY0Jppf4BFms0VzdMQ-A1HQYlIZ45Vyogr6FEythNvSYEDbum9gjrESwl2Ew__',
      content:
        '실버캠퍼스, 은빛 시간에 피어나는 지혜의 정원. 나이는 숫자, 그 안에 담긴 삶의 향기는 무한. 실버캠퍼스에서 노년을 새롭게 그리며, 인생의 황금시간을 함께 노래합니다.',
      url: 'https://github.com/example1',
      generation_id: 2,
    },
    {
      title: 'Project 6',
      image: '/path/to/project6B-image.jpg',
      generation: '11th',
      year: 2023,
    },
    // ...프로젝트
  ],
};

export default Content;
