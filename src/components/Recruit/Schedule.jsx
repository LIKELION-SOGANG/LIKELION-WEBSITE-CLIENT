import React from 'react';
import styled from 'styled-components';
const Schedule = () => {
  const scheduleData = [
    { title: '서류 접수', date: '2024.02.19. (월) ~ 2024.03.08. (금)' },
    { title: '서류 결과 발표', date: '2024.03.10. (일)' },
    { title: '대면 면접', date: '2024.03.12. (화) ~ 2024.03.14. (목)' },
    { title: '최종 발표', date: '2024.03.16. (토)' },
  ];
  return (
    <>
      <ScheduleContainer>
        <Topic>Schedule</Topic>
        <ScheduleBody>
          {scheduleData.map((item) => (
            <ScheduleItem key={item.title}>
              <Title>{item.title}</Title>
              <Date>{item.date}</Date>
            </ScheduleItem>
          ))}
        </ScheduleBody>
      </ScheduleContainer>
    </>
  );
};
const ScheduleContainer = styled.div`
  width: 97rem;
  height: 18rem;
  flex-direction: column;
  justify-content: center;
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

const ScheduleBody = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.8rem;
  position: relative;
`;
const ScheduleItem = styled.div`
  width: 22.1rem;
  height: 10rem;
  margin-top: 3.9rem;
  padding: 1.7rem 2.1rem;
  border-radius: 1rem;
  bottom 0;
  align-items: flex-start;
  gap: 1.7 rem;
  flex: 1 0 0;
  align-self: stretch;
  background: #F4F4F4;

`;

const Title = styled.div`
  color: var(--Main, #000);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;

const Date = styled.div`
  margin-top: 1.4rem;
  color: var(--Main, #000);
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
export default Schedule;
