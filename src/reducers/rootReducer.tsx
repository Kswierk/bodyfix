import * as actionTypes from './actions';

export interface RootStateTypes {
  modalExcercise: string | null;
  openModal: boolean;
}

const initialState: RootStateTypes = {
  modalExcercise: null,
  openModal: false,
};

type Action = { type: string; payload: string };

const rootReducer = (state: RootStateTypes = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_EXCERCISE:
      return {
        ...state,
        modalExcercise: action.payload,
      };
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        openModal: true,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
