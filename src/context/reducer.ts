import { Dispatch } from 'react';

export interface GlobalState {
  state: string;
  move: number;
  winner?: boolean;
  setNumber: number;
  xIsNext: boolean;
}

export const initGlobalState: GlobalState = {
  state: 'string',
  move: 0,
  winner: true,
  setNumber: 0,
  xIsNext: true,
};

// function onClick(
//   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
// ): void {}

export type GlobalAction =
  | { type: 'CLICK_BOADR'; state: string }
  | { type: 'JUMP_TO_HISTROY'; move: number }
  | { type: 'BACK_TO_HISTORY'; move: number };

export type globalDistpatch = Dispatch<GlobalAction>;

// function useGlobalStateContext(): State {
//   return useContext(StateContext);
// }

export function globalReducer(
  state: GlobalState,
  action: GlobalAction
): GlobalState {
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
