import React from 'react';
import styled from 'styled-components';

const InputField = ({ label, type, placeholder, options, onChange, value }) => {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      {type === 'select' ? (
        <Select
          onChange={onChange}
          value={value}
          style={{ fontSize: '1.67rem' }}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          style={{ fontSize: '1.67rem' }}
          onChange={onChange}
        />
      )}
    </FieldContainer>
  );
};

const FieldContainer = styled.div`
  width: 56.2rem;
  height: 9.2rem;
  margin-bottom: 5rem;
`;

const Label = styled.div`
  width: 56.2rem;
  height: 1.9rem;
  color: #424242;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 1.3rem;
`;

const Select = styled.select`
  width: 56.2rem;
  height: 5rem;
  border-radius: 1rem;
  border: 1px solid #b7b7b7;
  padding: 1.5rem;
  &:focus {
    border-color: black;
    outline: none;
  }
`;

const Input = styled.input`
  border-radius: 1rem;
  width: 56.2rem;
  height: 5rem;
  border: 1px solid #b7b7b7;
  ::placeholder {
    color: #d9d9d9;
  }
  padding: 1.6rem;
  &:focus {
    border-color: black;
    outline: none;
  }
`;
export default InputField;
