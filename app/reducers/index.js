// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import timer from './timer';
import user from './user';
import entries from './entries';
import jobs from './jobs';
import clients from './clients';

export default function createRootReducer(scope, history?: History) {
  let reducers = {
    timer,
    user,
    entries,
    jobs,
    clients
  };

  if (scope === 'renderer') {
    reducers = {
      ...reducers,
      router: connectRouter(history)
    };
  }

  return combineReducers({ ...reducers });
}
