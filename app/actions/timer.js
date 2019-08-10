// @flow
import type { GetState, Dispatch } from '../reducers/types';

let intervalTimer;

export const SET_DURATION = 'SET_DURATION';
export const SET_START = 'SET_START';
export const SET_END = 'SET_END';

export function setDuration() {
  return {
    type: SET_DURATION
  };
}

export function setStart() {
  return {
    type: SET_START
  };
}

export function setEnd() {
  return {
    type: SET_END
  };
}

export function start() {
  return (dispatch: Dispatch, getState: GetState) => {
    const { timer } = getState();
    dispatch(setStart());
    intervalTimer = setInterval(() => {
      dispatch(setDuration());
    }, 1000);
  };
}

// export function pause(delay: number = 1000) {
//   return (dispatch: Dispatch) => {
//     dispatch(setStart());
//     setInterval(() => {
//       dispatch(setDuration());
//     }, delay);
//   };
// }

export function stop() {
  return (dispatch: Dispatch) => {
    clearInterval(intervalTimer);
    dispatch(setEnd());
  };
}

export function toggle() {
  return (dispatch: Dispatch, getState: GetState) => {
    const { timer } = getState();
    // console.log(timer.currentState);

    switch (timer.currentState) {
      case 'started':
        // console.log(timer.currentState);

        dispatch(stop());
        break;
      case 'stopped':
        // console.log(timer.currentState);

        dispatch(start());
        break;
      default:
        break;
    }
  };
}
