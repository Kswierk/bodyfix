import React from 'react';
import styled from 'styled-components';
import Baner from './Baner';
import InformationalStart from './InformationalStart';

const Wraper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  align-items: center;
  height: calc(100vh - 80px);

  @media (min-width: 960px) {
    flex-direction: row;
    text-align: initial;
    /* background: linear-gradient(
      90deg,
      rgba(239, 239, 239, 1) 0%,
      rgba(255, 255, 255, 1) 60%
    ); */
    /* z-index: -2000; */
  }
`;

const Start = () => {
  return (
    <Wraper>
      {/* <InformationalWraper> */}
      <InformationalStart />
      {/* </InformationalWraper> */}
      <Baner />
    </Wraper>
  );
};

export default Start;
