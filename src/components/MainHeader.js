import React from 'react';
import styled from 'styled-components';

const HeaderWraper = styled.div`
  text-align: center;
  margin-top: 80px;
`;

const StyledH1 = styled.h1`
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;

  &::after {
    display: block;
    content: '';
    height: 2px;
    margin-top: 7px;
    background-color: #1888ff;
  }
`;

const MainHeader = (props) => {
  return (
    <HeaderWraper>
      <StyledH1>{props.text}</StyledH1>
    </HeaderWraper>
  );
};

export default MainHeader;
