import React, { useReducer, useContext, createContext, Dispatch } from 'react';

interface State {
  history: { squares: string[] }[];
  winner: string | any;
  stepNumber: number;
  xIsNext: boolean;
  isDisplayOrderByAsc: boolean;
  winningIndex: any;
}

const initialState: State = {
  history: [
    {
      squares: Array(9).fill(null),
    },
  ],
  stepNumber: 0,
  xIsNext: true,
  winner: null,
  isDisplayOrderByAsc: true,
  winningIndex: true,
};

const GAME_START: string = 'GAME_START';
const CLICK_HISTORY: string = 'CLICK_HISTORY';

type Action = { type: 'GAME_START' } | { type: 'CLICK_HISTORY' };
type GameDispatch = Dispatch<Action>;
// 액션의 타입을 Dispatch의 제네릭으로 지정해줌

const GlobalStateContext = createContext<State | null>(null);
const GlobalDispatchContext = createContext<GameDispatch | null>(null);

function reducer(state: State = initialState, action: any): State {
  switch (action.type) {
    case GAME_START: {
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      const winner = state.winner;

      if (winner || squares[action.index]) {
        return state;
      }

      squares[action.index] = state.xIsNext ? 'x' : 'o';

      return {
        history: history.concat([
          {
            squares: squares,
          },
        ]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
        winner: calcWinner(squares),
        isDisplayOrderByAsc: true,
        winningIndex: {},
      };
    }

    case CLICK_HISTORY: {
      const stepNumber = action.index;
      const xIsNext = stepNumber % 2 === 0 ? true : false;
      const winner = calcWinner(state.history[stepNumber].squares);
      return {
        history: state.history,
        stepNumber: stepNumber,
        xIsNext: xIsNext,
        winner: winner,
        isDisplayOrderByAsc: true,
        winningIndex: true,
      };
    }

    default:
      throw new Error('에러발생');
  }
}

function calcWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        player: squares[a],
        winningIndex: [a, b, c],
      };
    }
  }
}

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
