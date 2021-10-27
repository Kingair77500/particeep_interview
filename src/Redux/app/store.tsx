import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { moviesReducer } from '../Movies/index';

const reducers = combineReducers({
  movies: moviesReducer
});

export type RootState = ReturnType<typeof reducers>

export default createStore(
  reducers,
  {},
  applyMiddleware(thunk)
)