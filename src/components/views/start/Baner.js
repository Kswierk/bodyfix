import React from 'react';
import hero from '../../../assets/images/thinker.jpg';

import styled from 'styled-components';

const Wraper = styled.div`
  display: block;
  height: 100%;

  width: 100vw;

  @media (min-width: 600px) {
    position: absolute;
    /* width: 80vw; */
    z-index: -1;
    /* top: 20%; */
    /* right: 0px; */
    /* transform: translateY(-50%); */
  }
  @media (min-width: 960px) {
    /* width: 80vw; */
    /* position: relative; */
    /* top: 20%; */
    top: 0;
  }
`;
const StyledBaner = styled.div`
  background: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100vw;

  @media (min-width: 600px) {
    background-position: left -120px top 50px;
  }
  @media (min-width: 780px) {
    background-position: center top 50px;
  }
  @media (min-width: 960px) {
    /* background-position: left top 50px; */
    position: absolute;
    width: 80vw;
    right: 0;
    border-radius: 150px 0 0 250px;
  }
  @media (min-width: 1100px) {
    width: 60vw;
  }
`;

const Baner = () => {
  return (
    <Wraper>
      <StyledBaner src={hero} alt="baner" />
    </Wraper>
  );
};

export default Baner;
