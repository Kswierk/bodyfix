import React from 'react';
import styled from 'styled-components';

import MainHeader from '../../MainHeader';
import BackDescription from './BackDescription';
import { connect } from 'react-redux';
import * as actionTypes from '../../../reducers/actions';
import Modal from '../Modal/Modal';
import { RootStateTypes } from '../../../reducers/rootReducer';
import ExcerciseLink from '../ExcerciseLink';

const StyledExcercise = styled.p`
  display: block;
  margin: 15px auto;
  text-align: center;
  cursor: pointer;
`;

type Props = {
  onSetExcercise: (val: string) => RootStateTypes;
  onOpenModal: () => RootStateTypes;
  modal: boolean;
  Excercise: string;
};

const Back = (props: Props) => {
  // const {  modal } = props;
  return (
    <div>
      {props.modal ? <Modal /> : null}
      <MainHeader text="proste plecy" />
      <BackDescription />
      <ExcerciseLink name="cat-cow" text="kot pies" />
      <ExcerciseLink name="drugi" text="drugie cwiczenie" />

      {/* <StyledExcercise
        onClick={() => {
          onSetExcercise('cat-cow');
          onOpenModal();
        }}
      >
        catcow
      </StyledExcercise>
      <StyledExcercise
        onClick={() => {
          onSetExcercise('drugi');
          onOpenModal();
        }}
      >
        drugie
      </StyledExcercise> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Back);
