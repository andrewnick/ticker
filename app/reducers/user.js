// @flow
import { ADD_USER, REMOVE_USER } from '../actions/user';
import type { Action, userStateType } from './types';

const userInit = {
  id: 0,
  name: '',
  email: ''
};

export default function user(state: userStateType = userInit, action: Action) {
  console.log(action.payload);
  console.log(state);

  switch (action.type) {
    case ADD_USER:
      return action.payload;
    case REMOVE_USER:
      return userInit;
    default:
      return state;
  }
}
