import React, { createContext, useContext } from 'react';

export type State = {
  value: [];
  state: string;
  move: number;
  winner?: boolean;
  setNumber: number;
  xIsNext: boolean;
};
export default State;

function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
  dispatch({
    type: 'CLICK_BOADR'.asdas,
  });
}

export type Action =
  | { type: 'CLICK_BOADR' }
  | { type: 'JUMP_TO_HISTROY' }
  | { type: 'BACK_TO_HISTORY' };

export const StateContext = createContext;
export const DispatchContext = createContext<Dispatch | undefined>(undefined);

function useGlobalStateContext(): State {
  return useContext(StateContext);
}

export function globalReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'CLICK_BOADR':
      return {
        ...state,
        data: {},
      };

    case 'JUMP_TO_HISTORY':
      return {
        ...state,
        data: {},
      };

    case 'BACK_TO_HISTORY':
      return {
        ...state,
        data: {},
      };

    default:
      return state;
  }
}
function dispatch(arg0: { type: string; data: {} }) {
  throw new Error('Function not implemented.');
}
