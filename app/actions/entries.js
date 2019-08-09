// @flow
import type {
  Dispatch,
  entryStateType,
  entriesStateType
} from '../reducers/types';
import WorkflowMaxClientAPI from '../api/workflowmax/clientAPI';

export const ADD_ENTRY = 'ADD_ENTRY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';

export function addEntry(payload: entryStateType) {
  return {
    type: ADD_ENTRY,
    payload
  };
}

export function removeEntry() {
  return {
    type: REMOVE_ENTRY
  };
}

export function addEntries(entries: entriesStateType) {
  return (dispatch: Dispatch) => {
    const clientAPI = new WorkflowMaxClientAPI();
    clientAPI
      .getTasks()
      .then(data => {
        console.log(data);

        // dispatch(addUser(data));
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  };
}
