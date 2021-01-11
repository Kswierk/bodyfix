import React from 'react';
import styled from 'styled-components';

import MainHeader from '../../MainHeader';
import BackDescription from './BackDescription';
import { connect } from 'react-redux';
import * as actionTypes from '../../../reducers/actions';
import Modal from '../Modal/Modal';
import { RootStateTypes } from '../../../reducers/rootReducer';

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
};

const Back = (props: Props) => {
  const { onSetExcercise, onOpenModal, modal } = props;
  return (
    <div>
      {modal ? <Modal /> : null}
      <MainHeader text="proste plecy" />
      <BackDescription />

      <StyledExcercise
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
      </StyledExcercise>
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
