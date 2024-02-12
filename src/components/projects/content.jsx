import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectInfo from './projectInfo';
import Space from '../../util/Space';
import { projectList } from '../../api/projectList';
function Content() {
  const tabs = ['6th', '7th', '8th', '9th', '10th', '11th'];
  const [selectedTab, setSelectedTab] = useState('11th');
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [projectId, setProjectId] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let generationId;
        switch (selectedTab) {
          case '11th':
            generationId = 1;
            break;
          case '10th':
            generationId = 3;
            break;
          case '9th':
            generationId = 1;
            break;
          default:
            generationId = 3;
        }

        const data = await projectList(generationId);
        setSelectedProjects(data);
        setProjectId(generationId);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchData();
  }, [selectedTab]);

  const handleClick = (tab) => {
    setSelectedTab(tab);
  };

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
          <ProjectInfo
            key={project.id}
            selectedProjects={project}
            generation={selectedTab}
          />
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
  margin-right: 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 0 8px 0;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;

  & > div {
    width: 360px;
    margin-bottom: 7.8rem;
  }

  & > div:nth-child(3n + 1):nth-child(odd) {
    margin-left: 64px;
  }

  & > div:nth-child(3n + 1):nth-child(even) {
    margin-left: 318px;
  }
`;

// const dummyData = {
//   generation: '11th',
//   project_list: [
//     {
//       id: 1,
//       title: '유체크',
//       year: 2023,
//       team_name: '효자동개발자',
//       member_list: '김유이 이선명 이건화 고유진 윤태호 이상연',
//       project_image:
//         'http://127.0.0.1:8000/media/KakaoTalk_20240121_005358371.jpg',
//       content:
//         '코드로 마법을 부리는 효자동 개발자, 디버깅의 마술사. 오류의 길목에서 미소를 찾아내며, 프로그램의 성장을 이끄는 주인공. 효자동 개발자의 흔적은 믿음직하게 세상을 빛나게 합니다.',
//       url: 'https://github.com/LIKELION-SOGANG-OFFICIAL-WEBSITE/LIKELION-WEBSITE-SERVER',
//       generation_id: 2,
//     },
//     {
//       id: 2,
//       title: '실버캠퍼스',
//       year: 2023,
//       team_name: '효를 아십니까',
//       member_list: '임정연 김민지 송경호 정태현 김규빈',
//       project_image:
//         'http://127.0.0.1:8000/media/%EC%9E%84%EC%A0%95%EC%97%B0_%EB%B0%B1%EC%8B%A0%EC%A0%91%EC%A2%85%EC%99%84%EB%A3%8C%EC%A6%9D.png',
//       content:
//         '실버캠퍼스, 은빛 시간에 피어나는 지혜의 정원. 나이는 숫자, 그 안에 담긴 삶의 향기는 무한. 실버캠퍼스에서 노년을 새롭게 그리며, 인생의 황금시간을 함께 노래합니다.',
//       url: 'https://github.com/example1',
//       generation_id: 2,
//     },
//     {
//       id: 4,
//       title: '크루즈',
//       year: 2024,
//       team_name: '크루즈 팀',
//       member_list: '정고은 정인영 정태현 송경호 이종미 김규빈',
//       project_image:
//         'http://127.0.0.1:8000/media/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-03-12_173959.png',
//       content:
//         '바다 위의 자유, 크루즈로 떠나는 멋사의 모험. 코드의 파도를 타고 세계를 만나며, 프로그래밍의 신세계를 개척하는 크루즈로 프로젝트. 멋사 크루즈, 함께 하는 개발 여정을 즐겁게 항해해요.',
//       url: 'https://github.com/example3',
//       generation_id: 2,
//     },
//   ],
// };

export default Content;
