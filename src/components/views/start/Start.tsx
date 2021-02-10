import React, { useEffect } from 'react';
import styled from 'styled-components';
import Baner from './Baner';
import HowToStart from './HowToStart';
import InformationalStart from './InformationalStart';

const Wraper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  align-items: center;
  height: calc(100vh - 80px);
  /* height: calc(90vh - 80px); */
  /* margin-top: 150px; */
  /* top: 70px; */
  /* position: relative; */

  @media (min-width: 410px) {
    margin-top: 50px;
  }

  @media (min-width: 960px) {
    flex-direction: row;
    text-align: initial;
    margin-top: 0;
    height: calc(100vh - 80px);

    /* background: linear-gradient(
      90deg,
      rgba(239, 239, 239, 1) 0%,
      rgba(255, 255, 255, 1) 60%
    ); */
    /* z-index: -2000; */
  }
`;

const Start = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Wraper>
        <InformationalStart />
        <Baner />
      </Wraper>
      <HowToStart id="informationalRef" />
    </>
  );
};

export default Start;
