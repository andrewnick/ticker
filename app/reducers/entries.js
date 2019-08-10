/* eslint-disable no-param-reassign */
// @flow
import produce from 'immer';
import {
  ADD_ENTRY,
  ADD_ENTRIES,
  REMOVE_ENTRY,
  FETCH_ERROR
} from '../actions/entries';
import type { Action, entriesStateType } from './types';

const entriesInit = {};

export default function entries(
  state: entriesStateType = entriesInit,
  action: Action
) {
  return produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case ADD_ENTRY:
        draft[action.payload.id] = {
          ...action.payload,
          currentState: 'stopped',
          synced: true
        };
        return;
      case ADD_ENTRIES:
        action.payload.forEach(entry => {
          draft[entry.id] = {
            ...entry,
            currentState: 'stopped',
            synced: true
          };
        });

      case REMOVE_ENTRY:
      // return userInit;
    }
  });
}
