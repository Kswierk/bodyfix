import React, { useEffect } from 'react';
import ExcerciseLink from '../ExcerciseLink';
import { RootStateTypes } from '../../reducers/rootReducer';
import * as actionTypes from '../../reducers/actions';
import Modal from '../views/Modal/Modal';
import {
  backExcercises,
  legsExcercises,
  neckExcercises,
} from '../excercisesData';

import { connect } from 'react-redux';
import styled from 'styled-components';
interface IProps {
  modal: boolean;
}

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
const Draw = (props: IProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //getonerandom element

  const getRandomArbitrary = (
    min: number = 0,
    max: number
  ): number => {
    return parseInt((Math.random() * (max - min) + min).toFixed());
  };
  const randomBackExcerciseIndex: number = getRandomArbitrary(
    0,
    backExcercises.length - 1
  );
  const randomBackExcercise =
    backExcercises[randomBackExcerciseIndex].name;

  const randomLegsExcerciseIndex: number = getRandomArbitrary(
    0,
    legsExcercises.length - 1
  );
  const randomLegsExcercise =
    legsExcercises[randomLegsExcerciseIndex].name;

  const randomNeckExcerciseIndex: number = getRandomArbitrary(
    0,
    neckExcercises.length - 1
  );
  const randomNeckExcercise =
    neckExcercises[randomNeckExcerciseIndex].name;

  const { modal } = props;
  return (
    <>
      <Wraper>
        {modal ? <Modal /> : null}

        <StyledParagraph>
          Poniżej wylosowane zostało dla Ciebie po jednym ćwiczeniu na
          każdą z kluczowych grup mięsniowych. Jeżeli chcesz wylosować
          ćwiczenia jeszcze raz - kliknij ponownie w sekcję 'Wylosuj
          dzisiejsze ćwiczenia'
        </StyledParagraph>
      </Wraper>

      <ExcerciseLink
        name={randomBackExcercise}
        text={randomBackExcercise}
      />
      <ExcerciseLink
        name={randomLegsExcercise}
        text={randomLegsExcercise}
      />
      <ExcerciseLink
        name={randomNeckExcercise}
        text={randomNeckExcercise}
      />
    </>
  );
};

const mapStateToProps = (state: RootStateTypes) => ({
  modalExcercise: state.modalExcercise,
  modal: state.openModal,
});

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onSetExcercise: (value: string) =>
      dispatch({ type: actionTypes.SET_EXCERCISE, payload: value }),
    onOpenModal: () => dispatch({ type: actionTypes.OPEN_MODAL }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Draw);
