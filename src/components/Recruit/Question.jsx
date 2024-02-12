import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useStore from './Store';
import { instance } from '../../api/axios';
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
  } = useStore();
  const questions = [
    {
      prompt: '멋쟁이사자처럼 서강대에 지원하게 된 동기에 대해 기술해주십시오.',
      limit: 1000,
    },
    { prompt: '여기에 질문을 작성합니다.', limit: 1500 },
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

  return (
    <Background>
      <QuestionContainer>
        {questions.map((question, index) => (
          <div key={index}>
            <QuestionTitle>
              {index + 1}. {question.prompt}({question.limit}자)
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
