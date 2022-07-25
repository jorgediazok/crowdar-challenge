import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { reducers } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(reducers, {}, composedEnhancer);
