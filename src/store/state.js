import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { ACTION_TYPES } from './actions'

const componentEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const initialState = {
  ISSlocation: null,
  listAstronaut: null,
  errorISSlocation: null,
  errorListAstronaut: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_ISS_LOCATION:
      return {...state, ISSlocation: action.payload};

    case ACTION_TYPES.SET_LIST_ASTORNAUT:
      return {...state, listAstronaut: action.payload};

    case ACTION_TYPES.SET_ERROR_ISS_LOCATION:
      return {...state, errorISSlocation: action.payload};

    case ACTION_TYPES.SET_ERROR_LIST_ASTORNAUT:
      return {...state, errorListAstronaut: action.payload};

    default:
      return state;
  };
}

const store = createStore(
  reducer,
  componentEnhancer(applyMiddleware(...middleware))
);

export default store;