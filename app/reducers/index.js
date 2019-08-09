// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import timer from './timer';
import user from './user';
import entries from './entries';

export default function createRootReducer(scope, history?: History) {
  let reducers = {
    counter,
    timer,
    user,
    entries
  };

  if (scope === 'renderer') {
    reducers = {
      ...reducers,
      router: connectRouter(history)
    };
  }

  return combineReducers({ ...reducers });
}
