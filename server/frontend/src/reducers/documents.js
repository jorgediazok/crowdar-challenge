import * as actionType from '../constants/actionTypes';

const initialState = {
  documents: [],
};

const documentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_DOCUMENTS:
      return {
        ...state,
        documents: action.payload.data,
      };
    case actionType.FETCH_DOCUMENT:
      return { ...state, document: action.payload.document };
    case actionType.CREATE_DOCUMENT:
      return { ...state, documents: [...state.documents, action.payload] };
    case actionType.UPDATE_DOCUMENT:
      return {
        ...state,
        documents: state.documents.map((document) =>
          document._id === action.payload._id ? action.payload : document
        ),
      };
    case actionType.DELETE_DOCUMENT:
      return {
        ...state,
        documents: state.documents.filter(
          (document) => document._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default documentsReducer;
