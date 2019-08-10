// @flow
import type {
  Dispatch,
  clientstateType,
  clientsStateType
} from '../reducers/types';
import WorkflowMaxClientAPI from '../api/workflowmax/clientAPI';

export const ADD_CLIENTS = 'ADD_CLIENTS';

export function addClients(payload: clientsStateType) {
  return {
    type: ADD_CLIENTS,
    payload
  };
}

export function fetchClients() {
  return (dispatch: Dispatch) => {
    const clientAPI = new WorkflowMaxClientAPI();

    clientAPI
      .getClients()
      .then(data => {
        dispatch(addClients(data));
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  };
}
