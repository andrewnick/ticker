import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type counterStateType = {
  +counter: number
};

export type timerStateType = {
  +startDateTime: number,
  +endDateTime: number,
  +duration: number,
  +currentState: string
};

export type Action = {
  +type: string
};

export type GetState = () => {
  ...counterStateType,
  timer: timerStateType
};

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
