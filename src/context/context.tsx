import React, { useReducer, useContext, createContext, Dispatch } from 'react';

type State = {
  winner: boolean;
  move: boolean;
  history: object;
};

type Action =
  | { type: 'START_GAME'; move: boolean }
  | { type: 'CLICK_BOARD'; move: boolean }
  | { type: 'CLICK_HISTORY'; history: object };
type GameDispatch = Dispatch<Action>;
// 액션의 타입을 Dispatch의 제네릭으로 지정해줌

const GlobalStateContext = createContext<State | null>(null);
const GlobalDispatchContext = createContext<GameDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        move: action.move,
      };

    case 'CLICK_BOARD':
      return {
        ...state,
        move: action.move,
      };

    case 'CLICK_HISTORY':
      return {
        ...state,
        history: action.history,
      };

    default:
      throw new Error('에러발생');
  }
}

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    winner: 'winner',
    move: 0,
    history: {
      squares: Array(9).fill(null),
    },
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
