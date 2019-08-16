// @flow
import type {
  GetState,
  Dispatch,
  entryStateType,
  entriesStateType
} from '../reducers/types';
import * as TimerActions from './timer';
import WorkflowMaxClientAPI from '../api/workflowmax/clientAPI';

export const ADD_ENTRY = 'ADD_ENTRY';
export const UPDATE_ENTRY = 'UPDATE_ENTRY';
export const ADD_ENTRIES = 'ADD_ENTRIES';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';
export const START_ENTRY = 'START_ENTRY';
export const STOP_ENTRY = 'STOP_ENTRY';
export const SET_DURATION = 'SET_DURATION';
export const SET_START = 'SET_START';
export const SET_STOP = 'SET_STOP';

let intervalTimer;

export function addEntries(payload: entriesStateType) {
  return {
    type: ADD_ENTRIES,
    payload
  };
}

export function removeEntry() {
  return {
    type: REMOVE_ENTRY
  };
}

export function updateEntry(payload: entryStateType) {
  return {
    type: UPDATE_ENTRY,
    payload
  };
}

export function addEntry(payload: entryStateType) {
  return {
    type: ADD_ENTRY,
    payload
  };
}

export function setDuration(entryID: number) {
  return {
    type: SET_DURATION,
    payload: entryID
  };
}

export function setStart(entryID: number) {
  return {
    type: SET_START,
    payload: entryID
  };
}

export function setStop(entryID: number) {
  return {
    type: SET_STOP,
    payload: entryID
  };
}

export function fetchEntries() {
  return (dispatch: Dispatch) => {
    const clientAPI = new WorkflowMaxClientAPI();
    clientAPI
      .getEntries()
      .then(data => {
        dispatch(addEntries(data));
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function startEntryTimer(entryID: number) {
  // console.log('startEntryTimer', entryID);

  return (dispatch: Dispatch, getState: GetState) => {
    const { timer } = getState();
    dispatch(setStart(entryID));
    intervalTimer = setInterval(() => {
      dispatch(setDuration(entryID));
    }, 1000);
  };
}

export function stopEntryTimer(entryID: number) {
  return (dispatch: Dispatch) => {
    clearInterval(intervalTimer);
    dispatch(setStop(entryID));
  };
}

export function toggleEntryTimer(entryID: number) {
  // console.log('entryID', entryID);

  return (dispatch: Dispatch, getState: GetState) => {
    const { entries } = getState();
    // console.log(timer.currentState);
    const currentEntry = entries[entryID];
    // console.log(currentEntry);
    // console.log(currentEntry.currentState);

    switch (currentEntry.currentState) {
      case 'started':
        console.log('started', currentEntry.currentState);

        dispatch(stopEntryTimer(entryID));
        break;
      case 'stopped':
        // console.log(timer.currentState);
        console.log('stopped', currentEntry.currentState);

        dispatch(startEntryTimer(entryID));
        break;
      default:
        break;
    }
  };
}
