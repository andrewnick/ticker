// @flow
import type { Dispatch, jobStateType, jobsStateType } from '../reducers/types';
import WorkflowMaxClientAPI from '../api/workflowmax/clientAPI';

export const ADD_JOBS = 'ADD_JOBS';

export function addJobs(payload: jobsStateType) {
  return {
    type: ADD_JOBS,
    payload
  };
}

export function fetchJobs() {
  return (dispatch: Dispatch) => {
    const clientAPI = new WorkflowMaxClientAPI();

    clientAPI
      .getJobs()
      .then(data => {
        dispatch(addJobs(data));
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  };
}
