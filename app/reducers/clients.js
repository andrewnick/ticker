/* eslint-disable no-param-reassign */
// @flow
import produce from 'immer';
import { ADD_CLIENTS } from '../actions/clients';
import type { Action, clientsStateType } from './types';

const clientsInit = {};

export default function entries(
  state: clientsStateType = clientsInit,
  action: Action
) {
  return produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case ADD_CLIENTS:
        const clients = action.payload;
        clients.forEach(client => {
          draft[client.id] = client;
        });
    }
  });
}
