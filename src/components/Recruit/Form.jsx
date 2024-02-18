import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from './InputField';
import useStore from './Store';
import axios from 'axios';
import { instance } from '../../api/axios';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../util/MouseContextProvider';
import Lottie from 'react-lottie';
import Spin from './Spin';
import { useNavigate } from 'react-router-dom';
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
  const [spin, setSpin] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleStudentIdChange = (event) => {
    if (isNaN(event.target.value)) {
      return;
    }
    setStudentId(event.target.value);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handlePhoneChange = (event) => {
    if (isNaN(event.target.value)) {
      if (event.target.value.includes('-')) {
        setPhoneNumber(event.target.value);
      }
      return;
    }
    setPhoneNumber(event.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    const isValid = validInput();

    if (!isValid) {
      alert('입력을 확인해주세요!');
      return;
    }
    setSpin(true);
    instance
      .post(`application/`, {
        name: name,
        student_number: studentId,
        email: email,
        phone: phone_number,
      })
      .then((response) => {
        setPassword(response.data.apply_id);
        setCurrentStep(currentStep + 1);
        setSpin(false);
      })
      .catch((error) => {
        const errorMessage =
          error.response && error.response.data
            ? error.response.data.message
            : '';
        if (errorMessage === 'Duplicate application exists.') {
          alert('중복 지원은 허용되지 않습니다!');
          setSpin(false);
          setCurrentStep(1);
          setName('');
          setStudentId('');
          setEmail('');
          setPhoneNumber('');
        } else {
          alert('지원서 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
      });
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
      <FormWrapper>
        {spin ? (
          <Unique>
            <p>입력하신 이메일로 고유번호 생성중입니다. 잠시만 기다려주세요!</p>
            <Spin />
          </Unique>
        ) : (
          <>
            <InputContainer>
              <InputField
                label="이름"
                type="text"
                placeholder="지원자 이름을 입력해주세요."
                onChange={handleNameChange}
                validCheck={nameValid}
              />
              {!nameValid && (
                <WarningMessage>필수 입력 항목입니다.</WarningMessage>
              )}
            </InputContainer>
            <InputContainer>
              <InputField
                label="학번"
                type="text"
                placeholder="서강대학교 학번을 입력해주세요. ex) 20220001"
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
                onChange={handlePhoneChange}
                validCheck={phoneValid}
              />
              {!phoneValid && (
                <WarningMessage>필수 입력 항목입니다.</WarningMessage>
              )}
            </InputContainer>
            <div>
              <Button onClick={handleSubmit}>
                <ButtonText>입력한 이메일로 고유 번호 전송</ButtonText>
              </Button>
            </div>
          </>
        )}
      </FormWrapper>
    </motion.div>
  );
};
const FormWrapper = styled.div`
  position: relative;
`;

const SpinWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;

const Unique = styled.div`
  position: fixed;
  top: 17rem;
  left: 0;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
    width: 100%;
  }
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
  font-size: 1.6rem;
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
