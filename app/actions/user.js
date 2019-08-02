// @flow
import type { Dispatch, userStateType } from '../reducers/types';
import clientAPI from '../api/workflowmax/clientAPI';

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const FETCH_USER = 'FETCH_USER';

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

export function fetchUser() {
  return (dispatch: Dispatch) => {
    clientAPI.getUser();

    dispatch();
  };
}
