// @flow
import type { GetState, Dispatch, userStateType } from '../reducers/types';

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

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
