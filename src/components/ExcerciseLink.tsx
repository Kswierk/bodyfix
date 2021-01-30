import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionTypes from '../reducers/actions';
import { RootStateTypes } from '../reducers/rootReducer';

const StyledSpan = styled.span`
  margin: 0 3vw 0 15px;
  margin-right: 3vw;
  /* display: inline-block; */
  height: 2px;
  width: 2px;
  background-color: black;
  transition: 0.3s ease;

  @media (min-width: 960px) {
    margin-right: 100px;
    margin: 0 100px 0 40px;
  }
`;

const StyledExcercise = styled.div`
  /* width: 40vw; */
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  /* display: inline-block; */
  background-color: rgba(239, 239, 239, 1);
  border-radius: 10px;
  margin: 10px auto;
  padding: 10px;
  min-height: 45px;
  width: 50vw;

  &:hover ${StyledSpan} {
    width: 25px;
    /* height: 2px; */
    background-color: #1888ff;
  }

  @media (min-width: 960px) {
    /* width: 440px; */
    max-width: 1200px;
  }
`;

const StyledLi = styled.li`
  list-style: none;
`;

interface Props {
  onSetExcercise: (val: string) => RootStateTypes;
  onOpenModal: () => RootStateTypes;
  modal: boolean;
  name: string;
  text: string;
  number?: number;
}

const ExcerciseLink = (props: Props) => {
  return (
    <StyledExcercise
      onClick={() => {
        props.onSetExcercise(props.name);
        props.onOpenModal();
      }}
    >
      <StyledSpan></StyledSpan>
      <StyledLi>{props.text}</StyledLi>
    </StyledExcercise>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExcerciseLink);
