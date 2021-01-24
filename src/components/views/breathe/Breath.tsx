import React from 'react';
import styled from 'styled-components';

import MainHeader from '../../MainHeader';
import { breatheText } from '../../excercisesDescriptionData';

const Wraper = styled.div`
  max-width: 1000px;
  margin: 50px auto;
`;

const StyledParagraph = styled.p`
  line-height: 150%;
  margin: 0 15px;

  @media (min-width: 600px) {
    margin: 0 40px;
  }
  @media (min-width: 1200px) {
    margin: 0;
  }
`;
const Breath = () => {
  return (
    <div>
      <MainHeader text="prawidłowy oddech" />
      <Wraper>
        <StyledParagraph>{breatheText}</StyledParagraph>
      </Wraper>
    </div>
  );
};

export default Breath;
