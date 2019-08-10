/* eslint-disable no-param-reassign */
// @flow
import produce from 'immer';
import { ADD_TASKS } from '../actions/tasks';
import type { Action, tasksStateType } from './types';

const tasksInit = {};

export default function entries(
  state: tasksStateType = tasksInit,
  action: Action
) {
  return produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case ADD_TASKS:
        const tasks = action.payload;
        tasks.forEach(task => {
          draft[task.id] = task;
        });
    }
  });
}
