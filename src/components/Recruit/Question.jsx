import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useStore from './Store';
import InputField from './InputField';
import { instance } from '../../api/axios';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Question = () => {
  const {
    name,
    student_number,
    email,
    field,
    password,
    answer,
    setName,
    setPassword,
    setStudentId,
    setEmail,
    setField,
    currentStep,
    setCurrentStep,
    setAnswer,
    goNext,
    setSubmitTime,
    setGithubAddress,
  } = useStore();
  const questions = [
    {
      prompt:
        '간단한 자기소개와 함께, 다양한 IT 동아리 중에서 멋쟁이사자처럼 서강대학교 12기를 선택하고 지원하시게 된 이유를 작성해주세요. ',
      limit: 500,
    },
    {
      prompt:
        '파트를 선택한 이유와 관련 경험을 해본 경험이 있는지 작성해주세요. 그리고 멋쟁이사자처럼에서 이 파트로 활동하면서 어떠한 성장을 희망하는지 작성해주세요.',
      limit: 500,
    },
    {
      prompt:
        '멋쟁이사자처럼 서강대학교는 협업과 팀워크를 중요한 가치로 생각하는 공동체입니다. 지원자 본인이 협업과 팀워크를 진행해보았던 경험과, 그 경험을 멋쟁이사자처럼 서강대학교에서 어떻게 적용시킬 수 있을지 작성해주세요. ',
      limit: 500,
    },
    {
      prompt: '실현하고 싶은 자신만의 IT 서비스 아이디어에 대해 설명해주세요.',
      limit: 500,
    },
  ];

  const information = [
    {
      content:
        '* ‘지원서 저장하기’를 누르면 인적사항에 입력한 이메일로 지원서 저장 내용이 발송됩니다.',
    },
    {
      content:
        '* 저장 후에도 마감 기한 전까지 고유 번호를 활용해 지원서 수정이 가능합니다.',
    },
    {
      content: '* 마지막으로 저장된 지원서가 최종 제출본이 됩니다.',
    },
    {
      content:
        '* 서류 접수 마감 기한인 2024.03.08 (금) 23:59 전까지 꼭 제출을 완료하시기 바랍니다.',
    },
  ];
  const [replys, setReplys] = useState(questions.map(() => ''));
  const [selectedTimeSlots, setSelectedTimeSlots] = useState(
    new Array(9).fill(false),
  );

  const handleFieldChange = (event) => {
    setField(event.target.value);
  };
  const handleInputChange = (index, event) => {
    const newAnswers = [...replys];
    newAnswers[index] = event.target.value;
    setReplys(newAnswers);
  };
  const handleTime = () => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    let hours = today.getHours();
    let minutes = today.getMinutes();

    const submitTime = `${formattedDate} ${hours}시 ${minutes}분`;
    setSubmitTime(submitTime);
  };

  const answerPayload = replys.reduce((acc, answer, index) => {
    const key = `app${index + 1}`;
    acc[key] = answer;
    return acc;
  }, {});
  const payload = {
    ...answerPayload,
    name: name,
    student_number: student_number,
    email: email,
    field: field,
    password: password,
    github: ``,
  };
  // setPassword(`d64d4730-26a7-4358-92e6-12d7dca173c9`);

  const handleSubmit = () => {
    handleTime();
    console.log('테스트');
    console.log(name);
    console.log(email);
    console.log(student_number);
    console.log(field);
    console.log('payload 여기에요 ', payload);
    instance
      .patch(`application/${password}`, payload)
      .then((response) => {
        console.log('지원서 저장 성공 ? ', response.data);
        goNext();
      })
      .catch((error) => {
        console.log('지원서 저장 실패 ?', error);
      });
  };
  useEffect(() => {
    if (answer.length > 0) {
      setReplys(answer);
    } else {
      const initialAnswers = questions.map(() => '');
      setReplys(initialAnswers);
    }
  }, [answer]);
  const handleTimeSlotClick = (index) => {
    setSelectedTimeSlots((prev) =>
      prev.map((slot, idx) => (idx === index ? !slot : slot)),
    );
  };
  const timeSlots = [
    {
      date: '2024. 03. 12. (화)',
      slots: [
        { id: 1, time: '18:00 ~ 19:00' },
        { id: 2, time: '19:00 ~ 20:00' },
        { id: 3, time: '20:00 ~ 21:00' },
      ],
    },
    {
      date: '2024. 03. 13. (수)',
      slots: [
        { id: 4, time: '18:00 ~ 19:00' },
        { id: 5, time: '19:00 ~ 20:00' },
        { id: 6, time: '20:00 ~ 21:00' },
      ],
    },
    {
      date: '2024. 03. 14. (목)',
      slots: [
        { id: 7, time: '18:00 ~ 19:00' },
        { id: 8, time: '19:00 ~ 20:00' },
        { id: 9, time: '20:00 ~ 21:00' },
      ],
    },
  ];

  return (
    <Background>
      <QuestionContainer>
        <InputContainer>
          <InputField
            label="지원분야"
            type="select"
            options={[
              {
                label: '지원 분야를 선택해주세요.',
                value: '',
              },
              { label: 'Front-End', value: 'FRONTEND' },
              { label: 'Back-End', value: 'BACEKEND' },
            ]}
            onChange={handleFieldChange}
            validCheck={field}
          />
        </InputContainer>
        {questions.map((question, index) => (
          <div key={index}>
            <QuestionTitle>
              {index + 2}. {question.prompt}({question.limit}자 이내)
            </QuestionTitle>
            <TextArea
              value={replys[index]}
              onChange={(event) => handleInputChange(index, event)}
              maxLength={question.limit}
              placeholder="이곳에 답변을 입력해주세요"
              style={{ fontSize: '1.3rem' }}
            />
            <CharCount>
              {replys[index].length} / {question.limit}자
            </CharCount>
          </div>
        ))}
        <InputField
          label="6. 면접 가능한 날짜와 시간을 모두 선택해주세요."
          type="text"
          validCheck={true}
          placeholder="ex) https://github.com/likelionsg"
          fontWeight="400"
        />

        <TimeContainer>
          {timeSlots.map(({ date, slots }) => (
            <DateRow key={date}>
              <DateText>{date}</DateText>
              {slots.map(({ id, time }) => (
                <TimeSlot key={id}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ width: '1.4rem', height: '1rem' }}
                  />
                  <TimeText>{time}</TimeText>
                </TimeSlot>
              ))}
            </DateRow>
          ))}
        </TimeContainer>
        <div style={{ marginBottom: '5rem' }} />
        <InputField
          label="7. GitHub 계정이 있다면 링크를 올려주세요. (선택)"
          type="text"
          validCheck={true}
          placeholder="ex) https://github.com/likelionsg"
          fontWeight="400"
        />
        <>
          {information.map((warning, index) => (
            <Info key={index}>{warning.content}</Info>
          ))}
        </>

        <div style={{ marginBottom: '2.6rem' }} />
        <Button onClick={handleSubmit}>
          <ButtonText>지원서 저장하기</ButtonText>
        </Button>
        <div style={{ marginBottom: '1rem' }} />
      </QuestionContainer>
    </Background>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;
const Background = styled.div`
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
`;
const QuestionContainer = styled.div`
  width: 56.2rem;
  display: flex;
  flex-direction: column;
  height: auto;
`;
const QuestionTitle = styled.div`
  color: #424242;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.3rem;
  line-height: 150%;
`;

const TextArea = styled.textarea`
  width: 56.2rem;
  height: 15rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  border: 1px solid #b7b7b7;
  padding: 1.4rem;
  line-height: 160%;
  resize: none;
  &:focus {
    border-color: black;
    outline: none;
  }
`;

const CharCount = styled.div`
  text-align: right;
  margin-bottom: 4rem;
`;

const Info = styled.div`
  color: var(--Main, #000);
  font-family: Pretendard;
  font-size: 1.4rem;
  line-height: 180%;
`;

const TimeContainer = styled.div`
  display: flex;
  width: 55rem;
  // height: 13rem;
  // align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const DateRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin-bottom: 1.5rem;
  background: tomato;
`;

const TimeSlot = styled.div`
  display: flex;
  flex-direction: column
  // justify-content: flex-start;
  // align-items: center;
  width: 12.5rem;
  border-radius: 0.5rem;
  border: 1px solid #d9d9d9;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0.8rem;
`;

const DateText = styled.div`
  font-size: 1.3rem;
  margin-right: 1.5rem;
`;

const TimeText = styled.div`
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  color: #b7b7b7;
  // padding: 1rem 0.8rem;
`;

const Button = styled.button`
  width: 56.2rem;
  height: 5rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: 1px solid var(--Main, #000);
  background: var(--Main, #000);
`;

const ButtonText = styled.div`
  width: 30.5rem;
  height: 1.9rem;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 700;
`;
export default Question;
