import React from 'react';
import styled from 'styled-components';

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

const BackDescription = () => {
  return (
    <Wraper>
      <StyledParagraph>
        Siedzący tryb życia, zwiększa ryzyko wystąpienia bólu kręgosłupa,
        zwłaszcza na odcinku lędźwiowym. Jest to spowodowane osłabieniem mięśni
        brzucha które stabilizują korpus i utrzymują go w pozycji pionowej. W
        efekcie tego następuje hiperlordoza, która może doprowadzić do
        uszkodzenia kręgów i tkanek miękkich budujących kręgosłup. Taka sytuacja
        może doprowadzić do pogorszenia samopoczucia, dużej bolesności i
        ogólnego pogorszenia sylwetki.
      </StyledParagraph>
    </Wraper>
  );
};

export default BackDescription;
