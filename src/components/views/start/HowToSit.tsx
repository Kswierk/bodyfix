import React from 'react';
import howToSit from '../../../assets/images/howtoSit.jpg';

import styled from 'styled-components';

const Wraper = styled.div`
  margin: 30px auto;
  display: block;
  text-align: center;
`;

const Img = styled.img`
  margin: 0 auto;
  width: 80vw;
  max-width: 1000px;
  border-radius: 10px;
`;

const HowToSit = () => {
  return (
    <Wraper>
      <Img src={howToSit} alt="howToSit"></Img>
    </Wraper>
  );
};

export default HowToSit;
