// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';

export default function createRootReducer(scope, history?: History) {
  let reducers = {
    counter
  };

  if (scope === 'renderer') {
    reducers = {
      ...reducers,
      router: connectRouter(history)
    };
  }

  return combineReducers({ ...reducers });
}
