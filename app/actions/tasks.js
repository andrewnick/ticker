// @flow
import type { Dispatch, tasksStateType } from '../reducers/types';
import WorkflowMaxClientAPI from '../api/workflowmax/clientAPI';

export const ADD_TASKS = 'ADD_TASKS';

export function addTasks(payload: tasksStateType) {
  return {
    type: ADD_TASKS,
    payload
  };
}

export function fetchTasks() {
  return (dispatch: Dispatch) => {
    const clientAPI = new WorkflowMaxClientAPI();

    clientAPI
      .getTasks()
      .then(data => {
        dispatch(addTasks(data));
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  };
}
