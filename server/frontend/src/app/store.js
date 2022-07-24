import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { reducers } from '../reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

export const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(thunk), compose(applyMiddleware(...middleware)))
);
