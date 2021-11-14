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

// const [state, setState] = useState({
//   history: [{ squares: Array(9).fill(null) }],
//   xIsNext: true,
//   stepNumber: 0,
// });

// function game(state: string, move: number, winner?: boolean, xIsNext: number): <GlobalState> (
//   const onClick = useCallback(
//     (i) => {
//       const history = state.history.slice(0, state.stepNumber + 1);
//       const square = current.squares.slice();
//       if (calc(square) || square[i]) {
//         return null
//       }
//       square[i] = state.xIsNext ''
//     }
//   )
// )

export type GlobalAction =
  | { type: 'CLICK_BOADR'; state: string }
  | { type: 'JUMP_TO_HISTROY'; move: number; ocClick: () => void }
  | { type: 'BACK_TO_HISTORY'; move: number; ocClick: () => void };

export type globalDistpatch = Dispatch<GlobalAction>;

// function clickhistory() {
//   onclick(ev, MouseEvent);
//   any;
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
