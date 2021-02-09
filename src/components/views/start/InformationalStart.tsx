import React from 'react';
import styled from 'styled-components';
import Button from '../../Button';

const InformationalWraper = styled.div`
  position: relative;
  /* transform: translateY(-50%); */
  top: -250px;
  margin: 0 10px;

  @media (min-width: 600px) {
    /* top: -250px; */
  }
  @media (min-width: 960px) {
    position: initial;
    margin-left: 80px;
  }
`;
const Header = styled.h1`
  font-size: 1.3rem;
  background-color: rgba(239, 239, 239, 0.7);
  padding: 10px;
  border-radius: 10px;

  @media (min-width: 500px) {
    width: 90%;
    margin: 0 auto;
    font-size: 4vw;
  }
  @media (min-width: 600px) {
    width: 70%;
    font-size: 4vw;
  }
  @media (min-width: 960px) {
    width: 75%;
    padding: 0;
    text-align: left;
    margin: 0;
    background-color: transparent;
  }
  @media (min-width: 1400px) {
    font-size: 3.5rem;
  }
`;

const InformationalStart = () => {
  const ref = document.getElementById('informationalRef');

  const handleClick = () => {
    ref?.scrollIntoView();
  };
  return (
    <InformationalWraper>
      <Header>
        Sprawność fizyczna jest jednym z najważniejszych kluczy do
        dynamicznej i twórczej aktywności intelektualnej.
      </Header>
      <Button
        onClick={handleClick}
        text="Zacznij efektywniej pracować"
      />
    </InformationalWraper>
  );
};

export default InformationalStart;
