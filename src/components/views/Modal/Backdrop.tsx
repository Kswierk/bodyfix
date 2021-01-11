import React from 'react';

import { connect } from 'react-redux';
import * as actionTypes from '../../../reducers/actions';

import styled from 'styled-components';
const StyledBackdrop = styled.div`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
`;

const Backdrop = (props: any) => (
  <StyledBackdrop onClick={props.onCloseModal}></StyledBackdrop>
);

const mapDispatchToProps = (dispatch: any) => {
  return {
    onCloseModal: () => dispatch({ type: actionTypes.CLOSE_MODAL }),
  };
};

export default connect(null, mapDispatchToProps)(Backdrop);
