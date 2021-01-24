import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useInterval } from '../../../hooks/useInterval';

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

const CircleWraper = styled.div``;
const Circle = styled.div``;
const Text = styled.p``;
const PointerContainer = styled.div``;
const Pointer = styled.div``;
const GradientCircle = styled.div``;

const Breath = () => {
  const [text, setText] = useState('');
  const [flag, setFlag] = useState('grow');

  const totalTime = 7500;
  const breathTime = (totalTime / 5) * 2;
  const holdTime = totalTime / 5;

  const breatheAnimation = () => {
    setText('breath in');
    setFlag('grow');
    console.log('starts');

    setTimeout(() => {
      setText('hold');
      console.log('start hold');

      setTimeout(() => {
        setText('breathe Out');
        setFlag('shrink');
        console.log('breathe out');
      }, holdTime);
    }, breathTime);
  };

  // const interval = setInterval(breatheAnimation, totalTime);
  // useEffect(() => {
  //   breatheAnimation();
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [breatheAnimation, interval]);

  // useEffect(() => {
  //   breatheAnimation();
  // }, [breatheAnimation]);
  useEffect(() => {
    breatheAnimation();

    let id = setInterval(breatheAnimation, totalTime);
    return () => clearInterval(id);
  }, [totalTime]);

  return (
    <div>
      <MainHeader text="prawidłowy oddech" />
      <Wraper>
        <StyledParagraph>{breatheText}</StyledParagraph>
        <CircleWraper>
          <Circle></Circle>
          <Text>{text}</Text>
          <PointerContainer>
            <Pointer></Pointer>
          </PointerContainer>
          <GradientCircle></GradientCircle>
        </CircleWraper>
      </Wraper>
    </div>
  );
};

export default Breath;
