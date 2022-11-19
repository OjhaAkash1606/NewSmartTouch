import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import saga from './sagaMiddleware/saga';
import {
  optionReducer,
  socketConnection
  /*  socketReducer,
  rowsSelectionREducer,
  orderReducer,
  tradeBookReducer,
  positionReducer,
  columnProfileReducer,
  LogReducer,
  spreadReducer,
  enableActiveReducer */
} from './reducer/reducer';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  optionReducer,
  socketConnection

  /* socketReducer: socketReducer,
  rowsSelectionREducer: rowsSelectionREducer,
  orderReducer: orderReducer,
  tradeBookReducer: tradeBookReducer,
  positionReducer: positionReducer,
  columnProfileReducer: columnProfileReducer,
  LogReducer: LogReducer,
  spreadReducer: spreadReducer,
  enableActiveReducer: enableActiveReducer */
});

const store = configureStore({ reducer, middleware: () => [sagaMiddleware] });
sagaMiddleware.run(saga);

export default store;
