import React from 'react';
import styled from 'styled-components';
import InputField from './InputField';

const Form = () => {
  const handleNameChange = (event) => {
    console.log('Name:', event.target.value);
  };

  const handleStudentIdChange = (event) => {
    console.log('Student ID:', event.target.value);
  };

  const handleEmailChange = (event) => {
    console.log('Email:', event.target.value);
  };

  const handleFieldChange = (event) => {
    console.log('Field:', event.target.value);
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
        placeholder="지원 분야를 선택해주세요."
        options={[
          { label: 'Front-End', value: 'front' },
          { label: 'Back-End', value: 'back' },
        ]}
        onChange={handleFieldChange}
      />

      <div>
        <Button>
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
