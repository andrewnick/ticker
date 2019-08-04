/* eslint-disable no-param-reassign */
// @flow
import produce from 'immer';
import { ADD_USER, REMOVE_USER, FETCH_ERROR } from '../actions/user';
import type { Action, userStateType } from './types';

const userInit = {
  id: 0,
  name: '',
  email: '',
  loggedIn: false,
  loginError: ''
};

export default function user(state: userStateType = userInit, action: Action) {
  return produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case ADD_USER:
        draft.id = action.payload.id;
        draft.name = action.payload.name;
        draft.email = action.payload.email;
        draft.loggedIn = true;
        draft.loginError = '';
        return;
      case REMOVE_USER:
        return userInit;
      case FETCH_ERROR:
        draft.loginError = action.payload;
    }
  });
}
