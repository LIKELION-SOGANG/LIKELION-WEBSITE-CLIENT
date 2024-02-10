import React, { useState } from 'react';
import styled from 'styled-components';

const ExistingApplication = () => {
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    const inputlength = event.target.value.length;
    console.log(isValid);
    console.log(inputlength);
    setIsValid(inputlength === 6);
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
      <Button isValid={isValid}>
        <ButtonText>지원서 수정하기</ButtonText>
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

const Button = styled.button`
  width: 56.2rem;
  height: 5rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background: ${({ isValid }) => (isValid ? 'black' : '#d9d9d9')};
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
