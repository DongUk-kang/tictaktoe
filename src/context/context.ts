import React, { createContext, useContext, Dispatch } from 'react';

type State = {
  value: [];
  state: string;
  move: number;
  winner?: boolean;
  setNumber: number;
  xIsNext: boolean;
};
export default State;

// function onClick(
//   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
// ): void {}

export type Action =
  | { type: 'CLICK_BOADR'; state: string }
  | { type: 'JUMP_TO_HISTROY'; move: number }
  | { type: 'BACK_TO_HISTORY'; move: number };

export const StateContext = createContext;
export const DispatchContext = createContext<State | null>(null);

type globalDistpatch = Dispatch<Action>;

// function useGlobalStateContext(): State {
//   return useContext(StateContext);
// }

export function globalReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'CLICK_BOADR':
      return {
        ...state,
        state: action.state,
      };

    case 'JUMP_TO_HISTROY':
      return {
        ...state,
        move: action.move,
      };

    case 'BACK_TO_HISTORY':
      return {
        ...state,
        move: action.move,
      };

    default:
      return state;
  }
}
function dispatch(arg0: { type: string; data: {} }) {
  throw new Error('Function not implemented.');
}
