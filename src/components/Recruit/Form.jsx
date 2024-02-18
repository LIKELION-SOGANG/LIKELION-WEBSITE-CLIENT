import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from './InputField';
import useStore from './Store';
import axios from 'axios';
import { instance } from '../../api/axios';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../util/MouseContextProvider';
const Form = () => {
  const { textLeave } = useMousePosition();
  const {
    name,
    studentId,
    email,
    field,
    phone_number,
    setPassword,
    setName,
    setStudentId,
    setEmail,
    setField,
    setPhoneNumber,
    currentStep,
    setCurrentStep,
    goNext,
  } = useStore();
  const [nameValid, setNameValid] = useState(true);
  const [studentNumberValid, setStudentNumberValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(newEmail);
    // setEmailValid(emailRegex.test(newEmail.trim()));
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = () => {
    const isValid = validInput();
    if (!isValid) {
      alert('입력을 확인해주세요!');
      return;
    }
    instance
      .post(`application/`, {
        name: name,
        student_number: studentId,
        email: email,
        phone: phone_number,
      })
      .then((response) => {
        setPassword(response.data.apply_id);
        console.log('지원서 생성 성공! ', response.data);
        setCurrentStep(currentStep + 1);
      })
      .catch((error) => {
        console.log('지원서 생성 실패 !', error);
        const errorMessage =
          error.response && error.response.data
            ? error.response.data.message
            : '';
        if (errorMessage === 'Duplicate application exists.') {
          alert('입력을 확인해주세요');
          // setCurrentStep(currentStep + 1);
        } else {
          alert('지원서 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
      });
  };
  const handleKeyDown = (event) => {
    const allowedKeys = [
      'Backspace',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
      'Enter',
    ];

    if (!/[0-9-]/.test(event.key) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };
  const validInput = () => {
    const isNameValid = name.trim() !== '';
    const isStudentIdValid = studentId.trim() !== '';
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const isPhoneValid = phone_number.trim() !== '';

    setNameValid(isNameValid);
    setStudentNumberValid(isStudentIdValid);
    setEmailValid(isEmailValid);
    setPhoneValid(isPhoneValid);

    return isNameValid && isStudentIdValid && isEmailValid && isPhoneValid;
  };

  return (
    <motion.div onMouseEnter={textLeave}>
      <InputContainer>
        <InputField
          label="이름"
          type="text"
          placeholder="지원자 이름을 입력해주세요."
          onChange={handleNameChange}
          validCheck={nameValid}
        />
        {!nameValid && <WarningMessage>필수 입력 항목입니다.</WarningMessage>}
      </InputContainer>

      <InputContainer>
        <InputField
          label="학번"
          type="text"
          placeholder="서강대학교 학번을 입력해주세요. ex) 20220001"
          onKeyDown={handleKeyDown}
          onChange={handleStudentIdChange}
          value={studentId}
          validCheck={studentNumberValid}
        />
        {!studentNumberValid && (
          <WarningMessage>필수 입력 항목입니다.</WarningMessage>
        )}
      </InputContainer>
      <InputContainer>
        <InputField
          label="이메일"
          type="email"
          placeholder="이메일 주소를 입력해주세요. ex) likelionsg@gmail.com"
          onChange={handleEmailChange}
          validCheck={emailValid}
        />
        {!emailValid && (
          <WarningMessage>이메일 형식을 확인해주세요.</WarningMessage>
        )}
      </InputContainer>
      <InputContainer>
        <InputField
          label="전화번호"
          type="text"
          placeholder="연락 가능한 전화번호를 입력해주세요. ex) 010-1234-5678"
          value={phone_number}
          onKeyDown={handleKeyDown}
          onChange={handlePhoneChange}
          validCheck={phoneValid}
        />
        {!phoneValid && <WarningMessage>필수 입력 항목입니다.</WarningMessage>}
      </InputContainer>

      <div>
        <Button onClick={handleSubmit}>
          <ButtonText>입력한 이메일로 고유 번호 전송</ButtonText>
        </Button>
        {/* <Button onClick={handleTest}>
          <ButtonText>입력한 이메일로 고유 번호 전송</ButtonText>
        </Button> */}
      </div>
    </motion.div>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;
const Button = styled.button`
  width: 56.2rem;
  height: 5rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid var(--Main, #000);
  background: var(--Main, #000);
  margin-bottom: 1rem;
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
const WarningMessage = styled.div`
  color: #f66570;
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
`;
export default Form;
