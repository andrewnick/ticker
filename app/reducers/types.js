import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type counterStateType = {
  +counter: number
};

export type userStateType = {
  +id: number,
  +name: string,
  +email: string
};

export type timerStateType = {
  +startDateTime: number,
  +endDateTime: number,
  +duration: number,
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

export type Action = {
  +type: string
};

export type GetState = () => {
  ...counterStateType,
  timer: timerStateType
};

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
