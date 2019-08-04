// @flow
import type { Dispatch, userStateType } from '../reducers/types';
import WorkflowMaxClientAPI from '../api/workflowmax/clientAPI';

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_ERROR = 'FETCH_ERROR';

export function addUser(payload: userStateType) {
  return {
    type: ADD_USER,
    payload
  };
}

export function removeUser() {
  return {
    type: REMOVE_USER
  };
}

export function fetchError(error: string) {
  return {
    type: FETCH_ERROR,
    payload: error
  };
}

export function loginUser(name: string, email: string) {
  return (dispatch: Dispatch) => {
    const clientAPI = new WorkflowMaxClientAPI();
    clientAPI
      .getUser(name, email)
      .then(data => {
        dispatch(addUser(data));
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  };
}
