import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin-top: 30px;
  padding: 0.9rem 1.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #1888ff;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

type ButtonProps = { text: string };

const Button = ({ text }: ButtonProps) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
