import React from 'react';
import ExcerciseLink from '../ExcerciseLink';
import { RootStateTypes } from '../../reducers/rootReducer';
import * as actionTypes from '../../reducers/actions';
import Modal from '../views/Modal/Modal';
import { backExcercises } from '../excercisesData';

import { connect } from 'react-redux';
import { excercisesData } from './excercises/data';
interface IProps {
  modal: boolean;
}
const Draw = (props: IProps) => {
  //getonerandom element

  console.log(backExcercises.length);
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

  console.log(randomBackExcercise);

  const { modal } = props;
  return (
    <div>
      {modal ? <Modal /> : null}

      <p>draw</p>
      <ExcerciseLink
        name={randomBackExcercise}
        text={randomBackExcercise}
      />
    </div>
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
