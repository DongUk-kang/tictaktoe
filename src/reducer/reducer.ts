// import React from 'react';

// export interface GlobalState {
//   value: string | null;
//   state: string[];
//   move: number;
//   winner: null;
//   stepNumber: number;
//   xIsNext: boolean;
//   history: History[];
// }

// export const initGlobalState: GlobalState = {
//   value: null,
//   state: [],
//   move: 0,
//   winner: null,
//   stepNumber: 0,
//   xIsNext: true,
//   history: [],
// };
// // type T1 = {
// //   a: number;
// //   b: string;
// // };

// // function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): T1 {
// //   return {
// //     a: 1,
// //     b: 'string',
// //   }
// // }

// // function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
// //   dispatch({ type: "UPDATE_weiojfw", data: { })
// // }

// export type GlobalAction =
//   | {
//       type: 'CLICK_BOADR';
//     }
//   | {
//       type: 'JUMP_TO_HISTORY';
//     }
//   | {
//       type: 'BACK_TO_HISTORY';
//     };
// // | {
// //     type: 'UPDATE_HISTORY';
// //     data: Partial<NewType>;
// //   };

// // CLICK_BOADR 플레이어가 수를 둘때
// // JUMP_TO_HISTORY 버튼을 누르면 이전 히스토리로 돌아갈때 action
// export type GlobalDispatch = React.Dispatch<GlobalAction>;

// // {
// //   // dispatch({ type: 'CLICK_BOADR', data: { dispatchEvent } });
// // }

// export function globalReducer(
//   state: GlobalState,
//   action: GlobalAction
// ): GlobalState {
//   switch (action.type) {
//     case 'CLICK_BOADR':
//       return {
//         ...state,
//       };
//     case 'JUMP_TO_HISTORY':
//       return {
//         ...state,
//       };

//     case 'BACK_TO_HISTORY':
//       return {
//         ...state,
//       };

//     default:
//       return state;
//   }
// }

// // case 'UPDATE_HISTORY':
// //   state.history.push(action.data);

// //   return state;
// //   return {
// //     ...state,
// //     history: [...state.history],
// //   };
// // function dispatch(arg0: { type: string; data: {} }) {
// //   throw new Error('Function not implemented.');
// // }
// // type State = {
// //   xIsNext: boolean;
// //   stepNumber: 0;
// //   value: string;
// // };

// // type Action =
// //   | { type: 'CLICK_SQUARE'; state: State }
// //   | { type: 'JUMP_TO_HISTORY'; state: State }
// //   | { type: 'BACK_TO_HISTORY'; state: State };

// // function reducer(state: State, action: Action): State {
// //   switch (action.type) {
// //     case 'CLICK_SQUARE':
// //       return {
// //         ...state,
// //       };
// //   }
// // }
