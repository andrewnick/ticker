/* eslint-disable no-param-reassign */
// @flow
import produce from 'immer';
import { ADD_JOBS } from '../actions/jobs';
import type { Action, jobsStateType } from './types';

const jobsInit = {};

export default function entries(
  state: jobsStateType = jobsInit,
  action: Action
) {
  return produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case ADD_JOBS:
        const jobs = action.payload;
        jobs.forEach(job => {
          draft[job.id] = job;
        });
    }
  });
}
