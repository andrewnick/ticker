/* eslint-disable no-param-reassign */
// @flow
import produce from 'immer';
import {
  ADD_ENTRY,
  ADD_ENTRIES,
  REMOVE_ENTRY,
  SET_DURATION,
  SET_START,
  SET_STOP
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
      case SET_DURATION:
        console.log(action.payload);
        console.log(draft[action.payload]);
        console.log(state);
      // draft[action.payload] = {
      //   ...state,
      //   duration: state[action.payload].duration + 1
      // };

      // console.log(draft[action.payload].duration);
      // console.log(state[action.payload].duration);
      // draft[action.payload].duration = state[action.payload].duration + 1;
      case SET_START:
      // draft[action.payload].currentState = 'started';
      case SET_STOP:
      // draft[action.payload].currentState = 'stopped';
      case REMOVE_ENTRY:
      // return userInit;
    }
  });
}
