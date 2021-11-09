import React, { Dispatch, MouseEvent } from 'react';

export interface GlobalState {
  value: string | null;
  state: string[];
  move: number;
  winner: null;
  stepNumber: number;
  xIsNext: boolean;
}

interface history {
  
}

export const initGlobalState: GlobalState = {
  value: null,
  state: [],
  move: 0,
  winner: null,
  stepNumber: 0,
  xIsNext: true,
};

export type GlobalAction =
  | {
      type: 'CLICK_BOADR';
      onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    }
  | {
      type: 'JUMP_TO_HISTORY';
      onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    };
// CLICK_BOADR 플레이어가 수를 둘때
// JUMP_TO_HISTORY 버튼을 누르면 이전 히스토리로 돌아갈때 action
export type GlobalDispatch = Dispatch<GlobalAction>;

export function globalReducer(
  state: GlobalState,
  action: GlobalAction
): GlobalState {
  switch (action.type) {
    case 'CLICK_BOADR':
      return {
        ...state,
      };
    case 'JUMP_TO_HISTORY':
      return {
        ...state,
      };

    default:
      return state;
  }
}
