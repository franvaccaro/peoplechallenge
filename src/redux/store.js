/* eslint-disable indent */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/allReducers';

const initialState = {};
const middleware = [thunk];
// eslint-disable-next-line max-len
const enhancers = [applyMiddleware(...middleware),
// eslint-disable-next-line no-underscore-dangle
(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose];

const store = createStore(
  allReducers,
  initialState,
  compose(...enhancers),
);

export default store;
