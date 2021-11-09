import React, { Dispatch } from 'react';

export interface GlobalState {
  value: string;
  onClick: () => void;
  state: string[];
  move: number;
  step: object;
}

export const initGlobalState: GlobalState = {
  onClick: function (): void {
    throw new Error('Function not implemented.');
  },
  state: string[],
  move: number,
};

export type GlobalAction =
  | { type: 'CLICK_GAME_START'; }
  | { type: 'CLICK_SQUARE'; }
  | { type: 'JUMP_TO_STEP'; }
  | { type: 'CHANGE_TURN'; }
  | { type: 'BACK_TO_MOVE'; }
  | { type: 'FINISH_GAME'; }
export type GlobalDIspatch = Dispatch<GlobalAction>

export function globalReducer(state: GlobalState, action: GlobalAction): GlobalState {
  switch (action.type) {
    case 'CLICK_GAME_START':
      return {
        ...state,
        onClick: () => void,
      }
    
    case 'CLICK_SQUARE':
      return {
        ...state,
        onClick: () => void,
      }
    
    case 'JUMP_TO_STEP':
      return {
        ...state,
        onClick: () => void,
      }
    
    case 'CHANGE_TURN':
      return {
        ...state,
        onClick: () => void,
      }
    
    case 'BACK_TO_MOVE': 
      return {
        ...state,
        onClick: () => void,
      }
    
    case 'FINISH_GAME':
      return {
        ...state,
        onClick: () => void,
      }
  }
}
