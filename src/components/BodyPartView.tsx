import React from 'react';
import styled from 'styled-components';

import MainHeader from './MainHeader';
import BackDescription from './views/back/BackDescription';
import { connect } from 'react-redux';
import * as actionTypes from '../reducers/actions';
import Modal from './views/Modal/Modal';
import { RootStateTypes } from '../reducers/rootReducer';
import ExcerciseLink from './ExcerciseLink';
// import { excercisesData } from '../excercises/data';
// import { backExcercises } from './excercisesData';

const StyledList = styled.ul`
  /* display: flex; */
  width: 100%;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: space-between; */
`;

interface IProps {
  onSetExcercise: (val: string) => RootStateTypes;
  onOpenModal: () => RootStateTypes;
  modal: boolean;
  text: string;
  arr: any;
  description: () => JSX.Element;
}

interface IExcercise {
  name: string;
  description: string;
  link: string;
}

const BodyPart = (props: IProps) => {
  const { modal, text, arr, description } = props;
  return (
    <div>
      {modal ? <Modal /> : null}
      <MainHeader text={text} />
      <BackDescription />
      {description}

      {arr.map((excercise: IExcercise, index: number) => {
        return (
          <StyledList key={index}>
            <ExcerciseLink
              number={index + 1}
              name={excercise.name}
              text={excercise['name']}
            ></ExcerciseLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(BodyPart);
