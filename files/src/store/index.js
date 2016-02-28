import {createStore, applyMiddleware} from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import reducer from '../reducer';

const initialState = undefined; //eslint-disable-line

export default createStore(
  reducer,
  initialState,
  applyMiddleware(reduxThunkMiddleware)
);

//TODO: add chrome redux-devtools extension
