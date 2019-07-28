// @flow
import moment from 'moment';
import { SET_START, SET_END, SET_DURATION } from '../actions/timer';
import { Action, timerStateType } from './types';

const timerInit = {
  startDateTime: 0,
  endDateTime: 0,
  duration: 0,
  currentState: 'stopped'
};

export default function timer(
  state: timerStateType = timerInit,
  action: Action
) {
  switch (action.type) {
    case SET_START:
      return {
        ...state,
        startDateTime: moment().unix(),
        currentState: 'started'
      };
    case SET_END:
      return {
        ...state,
        endDateTime: moment().unix(),
        currentState: 'stopped'
      };
    case SET_DURATION:
      return {
        ...state,
        duration: moment().unix() - state.startDateTime
      };
    default:
      return state;
  }
}
