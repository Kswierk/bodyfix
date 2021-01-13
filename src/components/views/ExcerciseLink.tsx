import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionTypes from '../../reducers/actions';
import { RootStateTypes } from '../../reducers/rootReducer';

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
  name: string;
  text: string;
};

const ExcerciseLink = (props: Props) => {
  return (
    <div>
      <StyledExcercise
        onClick={() => {
          props.onSetExcercise(props.name);
          props.onOpenModal();
        }}
      >
        {props.text}
      </StyledExcercise>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onSetExcercise: (value: string) =>
      dispatch({ type: actionTypes.SET_EXCERCISE, payload: value }),
    onOpenModal: () => dispatch({ type: actionTypes.OPEN_MODAL }),
  };
};
const mapStateToProps = (state: RootStateTypes) => ({
  modalExcercise: state.modalExcercise,
  modal: state.openModal,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExcerciseLink);
