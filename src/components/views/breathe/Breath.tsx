import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
// import { useInterval } from '../../../hooks/useInterval';

import MainHeader from '../../MainHeader';
import { breatheText } from '../../excercisesDescriptionData';

const OuterWraper = styled.div`
  margin-bottom: 200px;
`;

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

const animation = keyframes`
  0%{
    transform: rotate(0deg)
  }
 
  100%{
    transform: rotate(360deg)
  }
`;
const pointerAnimation = () =>
  css`
    ${animation} 7500ms linear forwards infinite;
  `;

const grow = keyframes`
  0% {
    transform: scale(1);
  }
  40%{
    transform: scale(1.2);

  }
  60%{
    transform: scale(1.2);

  }
  100% {
    transform: scale(1);
  }
`;
const animationGrow = () =>
  css`
    ${grow} 7500ms infinite alternate linear;
  `;

const CircleWraper = styled.div<BreathProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  margin: auto;
  position: relative;
  top: 80px;
  transform: scale(1);
  animation: ${(props) => (props.animate ? animationGrow : null)};

  @media (min-width: 550px) {
    height: 300px;
    width: 300px;
  }
`;

const Circle = styled.div`
  background-color: #010f1c;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 50%;
`;
const Text = styled.p`
  color: #fff;
  cursor: pointer;
  z-index: 5;
  font-size: 1.3rem;
`;

const PointerContainer = styled.div<BreathProps>`
  position: absolute;
  top: -40px;
  left: 90px;
  width: 20px;
  height: 140px;
  animation: ${(props) => (props.animate ? pointerAnimation : null)};
  transform-origin: bottom center;
  @media (min-width: 550px) {
    top: -40px;
    left: 140px;
    width: 20px;
    height: 190px;
  }
`;
const Pointer = styled.div`
  background-color: black;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: block;
`;
const GradientCircle = styled.div`
  background: conic-gradient(
    #0651a1 0%,
    #1888ff 40%,
    #1f588d 40%,
    #1b5081 60%,
    #1888ff 60%,
    #1888ff 100%
  );
  height: 220px;
  width: 220px;
  position: absolute;
  top: -10px;
  left: -10px;
  z-index: -2;
  border-radius: 50%;

  @media (min-width: 550px) {
    height: 320px;
    width: 320px;
  }
`;

interface BreathProps {
  readonly animate?: boolean;
}

const Breath = () => {
  const [text, setText] = useState('START');
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const totalTime = 7500;
  const breathTime = (totalTime / 5) * 2;
  const holdTime = totalTime / 5;

  const breatheAnimation = () => {
    setText('Wdech');
    setShouldAnimate(true);

    setTimeout(() => {
      setText('Zatrzymaj');

      setTimeout(() => {
        setText('Wydech');
      }, holdTime);
    }, breathTime);
  };

  const startBreathing = () => {
    setIsRunning(true);
    breatheAnimation();
    let id = setInterval(breatheAnimation, totalTime);
    return () => clearInterval(id);
  };

  // useEffect(() => {
  //   let id = setInterval(breatheAnimation, totalTime);
  //   return () => clearInterval(id);
  // }, [totalTime]);

  return (
    <OuterWraper>
      <MainHeader text="prawidłowy oddech" />
      <Wraper>
        <StyledParagraph>{breatheText}</StyledParagraph>
        <CircleWraper animate={shouldAnimate}>
          <Circle></Circle>
          {isRunning ? (
            <Text>{text}</Text>
          ) : (
            <Text onClick={startBreathing}>{text}</Text>
          )}
          {/* <Text onClick={startBreathing}>{text}</Text> */}
          <PointerContainer animate={shouldAnimate}>
            <Pointer></Pointer>
          </PointerContainer>
          <GradientCircle></GradientCircle>
        </CircleWraper>
      </Wraper>
    </OuterWraper>
  );
};

export default Breath;
