import * as actionType from '../constants/actionTypes';

const initialState = {
  documents: [],
};

const documentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_DOCUMENTS:
      return { ...state };
    case actionType.FETCH_DOCUMENT:
      return { ...state };
    case actionType.CREATE_DOCUMENT:
      return { ...state };
    case actionType.UPDATE_DOCUMENT:
      return { ...state };
    case actionType.DELETE_DOCUMENT:
      return { ...state };
    default:
      return state;
  }
};

export default documentsReducer;
