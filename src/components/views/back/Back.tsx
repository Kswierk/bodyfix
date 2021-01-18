import React from 'react';
import styled from 'styled-components';

import MainHeader from '../../MainHeader';
import BackDescription from './BackDescription';
import { connect } from 'react-redux';
import * as actionTypes from '../../../reducers/actions';
import Modal from '../Modal/Modal';
import { RootStateTypes } from '../../../reducers/rootReducer';
import ExcerciseLink from '../../ExcerciseLink';
// import { excercisesData } from '../excercises/data';
import { backExcercises } from '../../excercisesData';

const StyledList = styled.ul`
  /* display: flex; */
  width: 100%;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: space-between; */
`;

type Props = {
  onSetExcercise: (val: string) => RootStateTypes;
  onOpenModal: () => RootStateTypes;
  modal: boolean;
  // Excercise: string;
};

const Back = (props: Props) => {
  // const { modal } = props;
  return (
    <div>
      {props.modal ? <Modal /> : null}
      <MainHeader text="proste plecy" />
      <BackDescription />

      {backExcercises.map((excercise, index) => {
        return (
          <StyledList key={index}>
            <ExcerciseLink
              number={index + 1}
              name={excercise.name}
              text={excercise.name}
            >
              {/* <StyledSpan>{index + 1}</StyledSpan> */}
            </ExcerciseLink>
          </StyledList>
        );
      })}
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
