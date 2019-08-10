// @flow
import type {
  Dispatch,
  entryStateType,
  entriesStateType
} from '../reducers/types';
import WorkflowMaxClientAPI from '../api/workflowmax/clientAPI';

export const ADD_ENTRY = 'ADD_ENTRY';
export const UPDATE_ENTRY = 'UPDATE_ENTRY';
export const ADD_ENTRIES = 'ADD_ENTRIES';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';

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
