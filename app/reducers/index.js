// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import timer from './timer';

export default function createRootReducer(scope, history?: History) {
  let reducers = {
    counter,
    timer
  };

  if (scope === 'renderer') {
    reducers = {
      ...reducers,
      router: connectRouter(history)
    };
  }

  return combineReducers({ ...reducers });
}
