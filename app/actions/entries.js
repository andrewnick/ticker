// @flow
import type {
  Dispatch,
  entryStateType,
  entriesStateType
} from '../reducers/types';
import WorkflowMaxClientAPI from '../api/workflowmax/clientAPI';

export const ADD_ENTRY = 'ADD_ENTRY';
export const ADD_ENTRIES = 'ADD_ENTRIES';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';

export function addEntry(payload: entryStateType) {
  return {
    type: ADD_ENTRY,
    payload
  };
}

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

export function fetchEntries() {
  // console.log('fetch entries');

  return (dispatch: Dispatch) => {
    const clientAPI = new WorkflowMaxClientAPI();
    // console.log('fetch');

    clientAPI
      .getEntries()
      .then(data => {
        // console.log('data', data);

        dispatch(addEntries(data));
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  };
}
