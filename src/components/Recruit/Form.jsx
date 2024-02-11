import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from './InputField';
import useStore from './Store';
const Form = () => {
  const {
    setName,
    setStudentId,
    setEmail,
    setField,
    currentStep,
    setCurrentStep,
  } = useStore();

  const handleNameChange = (event) => {
    setName(event.target.value);
    // console.log('Name:', event.target.value);
  };

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
    // console.log('Student ID:', event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // console.log('Email:', event.target.value);
  };

  const handleFieldChange = (event) => {
    setField(event.target.value);
    // console.log('Field:', event.target.value);
  };

  const handleSubmit = () => {
    // console.log('Name:', name);
    // console.log('Student ID:', studentId);
    // console.log('Email:', email);
    // console.log('Field:', field);
    setCurrentStep(currentStep + 1);
  };
  return (
    <div>
      <InputField
        label="이름"
        type="text"
        placeholder="지원자 이름을 입력해주세요."
        onChange={handleNameChange}
      />
      <InputField
        label="학번"
        type="text"
        placeholder="서강대학교 학번을 입력해주세요. ex) 20220001"
        onChange={handleStudentIdChange}
      />
      <InputField
        label="이메일"
        type="email"
        placeholder="이메일 주소를 입력해주세요."
        onChange={handleEmailChange}
      />
      <InputField
        label="지원분야"
        type="select"
        options={[
          {
            label: '지원 분야를 선택해주세요.',
            value: '',
          },
          { label: 'Front-End', value: 'Front' },
          { label: 'Back-End', value: 'Back' },
        ]}
        onChange={handleFieldChange}
      />

      <div>
        <Button onClick={handleSubmit}>
          <ButtonText>입력한 이메일로 고유 번호 전송</ButtonText>
        </Button>
      </div>
    </div>
  );
};

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
export default Form;
