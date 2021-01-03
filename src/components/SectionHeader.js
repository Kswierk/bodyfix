import React from 'react';
import styled from 'styled-components';

const HeaderWraper = styled.div`
  margin: 20px 0 45px 20px;
`;

const StyledH3 = styled.h3`
  display: inline-block;
  font-size: 1.6rem;

  &::after {
    display: block;
    content: '';
    width: 50%;
    height: 2px;
    margin-top: 7px;
    background-color: #1888ff;
  }
`;

const SectionHeader = (props) => {
  return (
    <HeaderWraper>
      <StyledH3>Dlaczego warto dbać o prawidłową postawę ciała</StyledH3>
    </HeaderWraper>
  );
};

export default SectionHeader;
