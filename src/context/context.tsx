import React, { useReducer, useContext, createContext, Dispatch } from 'react';

interface State {
  history: { squares: string[] }[];
  winner: string | any;
  stepNumber: number;
  xIsNext: boolean;
  index: number | any;
}

type Action =
  | { type: 'GAME_START'; index: number }
  | { type: 'CLICK_HISTORY'; index: number };
type GameDispatch = Dispatch<Action>;
// 액션의 타입을 Dispatch의 제네릭으로 지정해줌

const GlobalStateContext = createContext<State | null>(null);
const GlobalDispatchContext = createContext<GameDispatch | null>(null);

function reducer(state: State, action: any): State {
  switch (action.type) {
    case 'GAME_START':
      return {
        ...state,
        index: action.index,
      };

    case 'CLICK_HISTORY':
      return {
        ...state,
        index: action.index,
      };

    default:
      throw new Error('에러발생');
  }
}

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    history: [],
    winner: null,
    stepNumber: 0,
    xIsNext: true,
    index: 0,
  });

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

export function useGameState() {
  const state = useContext(GlobalStateContext);
  if (!state) throw new Error('state 에러발생');
  return state;
}

export function useGameDispatch() {
  const dispatch = useContext(GlobalDispatchContext);
  if (!dispatch) throw new Error('dispatch 에러발생');
  return dispatch;
}
