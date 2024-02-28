import React from 'react';
import styled from 'styled-components';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputField = ({
  label,
  type,
  placeholder,
  options,
  onChange,
  value,
  onKeyDown,
  validCheck,
  fontWeight,
}) => {
  const labelWidthEstimate = label.length * 15;
  const circleLeftPosition = `calc(${labelWidthEstimate}px + 0.2%)`;
  return (
    <FieldContainer>
      <LabelContainer>
        <Label fontWeight={fontWeight}>{label}</Label>
        <Circle isValid={validCheck} style={{ left: circleLeftPosition }} />
      </LabelContainer>
      {type === 'select' ? (
        <SelectContainer>
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
          <IconContainer>
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ height: '2rem', width: '1.25rem', color: '#b7b7b7' }}
            />
          </IconContainer>
        </SelectContainer>
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          style={{ fontSize: '1.67rem' }}
          onChange={onChange}
          onKeyDown={onKeyDown}
          isValid={validCheck}
          value={value}
        />
      )}
    </FieldContainer>
  );
};

const FieldContainer = styled.div`
  width: 56.2rem;
  height: 9.2rem;
`;
const Circle = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: ${({ isValid }) => (isValid ? 'white' : '#f66570')};
  // background: black;
  position: absolute;
  // left: calc(len(label) + 5.5%);
  // top: 0;
  // transform: translateY(-50%);
`;

const LabelContainer = styled.div`
  display: flex;
  // align-items: center;
  position: relative;
  gap: 0.8rem;
  // background: tomato;
  padding-right: 2rem;
`;
const SelectContainer = styled.div`
  position: relative;
  width: 56.2rem;
`;
const Label = styled.div`
  width: 56.2rem;
  height: 1.9rem;
  color: #424242;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  line-height: normal;
  margin-bottom: 1.3rem;
  font-weight: ${({ fontWeight }) => (fontWeight ? '500' : '700')};
`;
const Select = styled.select`
  width: 56.2rem;
  height: 5rem;
  border-radius: 1rem;
  border: 1px solid #b7b7b7;
  padding: 1.5rem;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    border-color: black;
    outline: none;
  }
`;
const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  pointer-events: none;
`;

const Input = styled.input`
  border-radius: 1rem;
  width: 56.2rem;
  height: 5rem;
  border: 1px solid ${({ isValid }) => (isValid ? '#b7b7b7' : '#f66570')};

  ::placeholder {
    color: #d9d9d9;
  }
  padding: 1.6rem;
  &:focus {
    border-color: ${({ isValid }) => (isValid ? 'black' : '#f66570')};
    outline: none;
  }
`;
export default InputField;
