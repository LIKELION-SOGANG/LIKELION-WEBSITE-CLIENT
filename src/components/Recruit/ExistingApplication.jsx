import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { instance } from '../../api/axios';
import useStore from './Store';
import { useMousePosition } from '../../util/MouseContextProvider';
import { motion } from 'framer-motion';

const ExistingApplication = ({ onGoNext, onExistingApplication }) => {
  const { textEnter, textLeave } = useMousePosition();

  const [isValid, setIsValid] = useState(false);
  const {
    name,
    email,
    field,
    student_number,
    githubAddress,
    setAnswer,
    setName,
    setStudentId,
    setEmail,
    setField,
    password,
    setPassword,
    setGithubAddress,
  } = useStore();

  const handleInputChange = (event) => {
    const inputlength = event.target.value.length;
    // console.log(isValid);
    // console.log(inputlength);
    setPassword(event.target.value);
    setIsValid(inputlength === 36);
  };

  const handleButtonClick = () => {
    if (isValid) {
      onExistingApplication();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    instance
      .get(`application/${password}`)
      .then((response) => {
        const responsedata = response.data;
        setName(responsedata.name);
        setStudentId(responsedata.student_number);
        setEmail(responsedata.email);
        setField(responsedata.field);
        setAnswer(0, responsedata.app1);
        setAnswer(1, responsedata.app2);
        setAnswer(2, responsedata.app3);
        setAnswer(3, responsedata.app4);
        setGithubAddress(responsedata.github);
        console.log('깃허브 주소 업데이트 체크 : ', githubAddress);
        onGoNext();

        console.log('지원서 불러오기 성공!', response.data);
      })
      .catch((error) => console.log('지원서 불러오기 실패!', error));
  };
  return (
    <div>
      <Text>이미 작성하던 지원서가 있으시다면,</Text>
      <Input
        type="text"
        placeholder="이메일로 발송된 고유 번호를 입력해주세요."
        style={{ fontSize: '1.5rem' }}
        onChange={handleInputChange}
      />
      <Button isValid={isValid} onClick={handleButtonClick}>
        <ButtonText onMouseEnter={textEnter} onMouseLeave={textLeave}>
          지원서 수정하기
        </ButtonText>
      </Button>
    </div>
  );
};

const Text = styled.div`
  color: var(--Main, #000);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3rem;
  margin-bottom: 1.2rem;
`;

const Input = styled.input`
  width: 56.2rem;
  height: 5rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid #b7b7b7;
  margin-bottom: 1.2rem;
  padding: 1.4rem;
  ::placeholder {
    color: #d9d9d9;
  }
  &:focus {
    border-color: black;
    outline: none;
  }
`;

const Button = styled(motion.button)`
  width: 56.2rem;
  height: 5rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background: ${({ isValid }) => (isValid ? 'black' : '#d9d9d9')};
  cursor: ${({ isValid }) => (isValid ? 'pointer' : 'none')};
  margin-bottom: 1.2rem;
`;

const ButtonText = styled.div`
  width: 30.5rem;
  height: 1.9rem;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export default ExistingApplication;
