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
    student_number,
    email,
    field,
    setPassword,
    setName,
    setStudentId,
    setEmail,
    setField,
    currentStep,
    setCurrentStep,
  } = useStore();

  const Form = () => {
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [email, setEmail] = useState('');
    const [field, setField] = useState('');
    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleStudentIdChange = (event) => {
      setStudentId(event.target.value);
    };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handleFieldChange = (event) => {
      setField(event.target.value);
    };

    const handleSubmit = () => {
      instance
        .post(`application/`, {
          name: name,
          student_number: student_number,
          email: email,
          field: field,
        })
        .then((response) => {
          setPassword(response.data.apply_id);
          console.log('지원서 생성 성공! ', response.data);
          setCurrentStep(currentStep + 1);
        } else {
          alert('지원서 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
      });
  };
  return (
    <motion.div onMouseEnter={textLeave}>
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
          { label: 'Front-End', value: 'FRONTEND' },
          { label: 'Back-End', value: 'BACEKEND' },
        ]}
        onChange={handleFieldChange}
      />

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
            { label: 'Front-End', value: 'FRONTEND' },
            { label: 'Back-End', value: 'BACEKEND' },
          ]}
          onChange={handleFieldChange}
        />

        <div>
          <Button onClick={handleSubmit}>
            <ButtonText>입력한 이메일로 고유 번호 전송</ButtonText>
          </Button>
        </div>
      </div>
    </motion.div>
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
export default Form;
