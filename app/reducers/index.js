// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';

export default function createRootReducer() {
  return combineReducers({
    router: connectRouter(),
    counter
  });
}
