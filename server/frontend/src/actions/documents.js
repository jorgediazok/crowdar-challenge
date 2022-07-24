import * as API from '../services/index';
import {
  CREATE_DOCUMENT,
  DELETE_DOCUMENT,
  FETCH_DOCUMENT,
  FETCH_DOCUMENTS,
  UPDATE_DOCUMENT,
} from '../constants/actionTypes';

export const fetchDocuments = () => async (dispatch) => {
  try {
    const { data } = await API.fetchDocuments();
    dispatch({
      type: FETCH_DOCUMENTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchDocument = (id) => async (dispatch) => {
  try {
    const { data } = await API.fetchDocument(id);
    dispatch({ type: FETCH_DOCUMENT, payload: { document: data } });
  } catch (error) {
    console.log(error);
  }
};

export const createDocument = (document) => async (dispatch) => {
  try {
    const { data } = await API.createDocument(document);
    dispatch({ type: CREATE_DOCUMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateDocument = (id, document) => async (dispatch) => {
  try {
    const { data } = await API.updateDocument(id, document);
    dispatch({ type: UPDATE_DOCUMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteDocument = (id) => async (dispatch) => {
  try {
    await API.deleteDocument(id);
    dispatch({ type: DELETE_DOCUMENT, payload: id });
  } catch (error) {
    console.log(error);
  }
};
