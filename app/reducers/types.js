import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type userStateType = {
  +id: number,
  +name: string,
  +email: string
};

export type timerStateType = {
  +timeID: number,
  +startDateTime: number,
  +endDateTime: number,
  +duration: number, // seconds
  +currentState: string
};

export type entryStateType = {
  +id: number,
  +taskId: number,
  +jobID: string,
  +name: string,
  +startDateTime: number,
  +endDateTime: number,
  +duration: number,
  +currentState: string,
  +synced: boolean
};

export type taskStateType = {
  +id: number,
  +name: string,
  +description: string
};

export type jobStateType = {
  +id: number,
  +name: string,
  +clientID: string
};

export type clientStateType = {
  +id: number,
  +name: string
};

export type entriesStateType = Object<entryStateType>;
export type jobsStateType = Object<jobStateType>;
export type clientsStateType = Object<clientStateType>;
export type tasksStateType = Object<taskStateType>;

export type Action = {
  +type: string
};

export type GetState = () => {
  timer: timerStateType,
  entries: entriesStateType,
  tasks: tasksStateType,
  jobs: jobsStateType,
  clients: clientStateType
};

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
