/* eslint-disable no-param-reassign */
// @flow
import produce from 'immer';
import { ADD_ENTRY, REMOVE_ENTRY, FETCH_ERROR } from '../actions/entries';
import type { Action, entriesStateType } from './types';

const entriesInit = [];

export default function entries(
  state: entriesStateType = entriesInit,
  action: Action
) {
  return produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case ADD_ENTRY:
      // draft.id = action.payload.id;
      // draft.name = action.payload.name;
      // draft.email = action.payload.email;
      // draft.loggedIn = true;
      // draft.loginError = '';
      case REMOVE_ENTRY:
      // return userInit;
    }
  });
}
