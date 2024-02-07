import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Schedule = () => {
  const scheduleData = [
    { title: '서류 접수', date: '2024.02.19. (월)\n ~ 2024.03.08. (금)' },
    { title: '서류 결과 발표', date: '2024.03.10. (일)' },
    { title: '대면 면접', date: '2024.03.12. (화)\n ~ 2024.03.14. (목)' },
    { title: '최종 발표', date: '2024.03.16. (토)' },
  ];
  const areaData = [
    {
      title: 'Front-End',
      content: '사용자와 상호작용하는 인터페이스를 시각화하여 구현합니다.',
      more: '자세한 커리큘럼 보러가기',
      link: 'https://www.naver.com/',
    },
    {
      title: 'Back-End',
      content: '데이터 처리, 비즈니스 로직, 서버 관리 등을 담당합니다.',
      more: '자세한 커리큘럼 보러가기',
      link: 'https://www.google.com',
    },
  ];

  return (
    <>
      <Section
        title="Schedule"
        data={scheduleData}
        renderItem={(item) => (
          <>
            <Title>{item.title}</Title>
            <Date>{item.date}</Date>
          </>
        )}
      ></Section>
      <Section
        title="Area"
        data={areaData}
        renderItem={(item) => (
          <>
            <Title>{item.title}</Title>
            <Date>{item.content}</Date>
            <MoreInfo>
              <a href={item.link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  color="rgba(183, 183, 183, 1)"
                />
                <Morelink>{item.more}</Morelink>
              </a>
            </MoreInfo>
          </>
        )}
      ></Section>
    </>
  );
};
const TextBase = styled.div`
  color: var(--Main, #000);
  font-family: Pretendard;
  line-height: normal;
  font-style: normal;
  white-space: pre-line;
`;

const Title = styled(TextBase)`
  font-size: 1.6rem;
  font-weight: 600;
`;

const Date = styled(TextBase)`
  margin-top: 1.4rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

const MoreInfo = styled.div`
  margin-top: 1rem;
  a {
    display: flex;
    flex-direction: row;
  }
`;

const Morelink = styled.div`
  font-size: 1.1rem;
  margin-left: 0.5rem;
  color: #b7b7b7;
`;

export default Schedule;