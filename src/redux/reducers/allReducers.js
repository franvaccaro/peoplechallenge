// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import dialogReducer from './dialogReducer';
import loaderReducer from './loaderReducer';
import peopleReducer from './peopleReducer';

const allReducers = combineReducers({
  peopleArr: peopleReducer,
  loaderState: loaderReducer,
  dialogState: dialogReducer,
});

export default allReducers;
