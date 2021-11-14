import React from 'react';
import Boards from './Board';

export function calc(squares: string[]) {
  const line = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  /**
   * 게임에서 승리할 수 있는 조건 3칸 채우기
   *
   */

  for (let i = 0; i < line.length; i++) {
    const [a, b, c] = line[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// function Game() {
//   const [state, setState] = useState({
//     history: [{ squares: Array(9).fill(null) }],
//     xIsNext: true,
//     stepNumber: 0,
//   });

//   /**
//    * 게임 펑션 컴포넌트
//    *
//    */

const current = state.history[state.stepNumber];
//   // 히스토리 함수 활용한 게임
//   const winner = calc(current.squares);
//   const onClick = useCallback(
//     (i) => {
//       const history = state.history.slice(0, state.stepNumber + 1);
//       const square = current.squares.slice();
//       if (calc(square) || square[i]) {
//         return null;
//       }
//       // useCallback 활용으로 함수 재활용
//       square[i] = state.xIsNext ? 'x' : 'o';
//       setState({
//         ...state,
//         history: history.concat([{ squares: square }]),
//         xIsNext: !state.xIsNext,
//         stepNumber: history.length,
//       });
//       // 게임 순서 상태
//     },
//     [state, current]
//   );

//   const jumpTo = (step: number) => {
//     setState({
//       ...state,
//       stepNumber: step,
//       xIsNext: step % 2 === 0,
//     });
//   };

//   const moves = state.history.map((step: object, move: number) => {
//     const desc = move ? 'Go to move #' + move : 'Go to game start';
//     return (
//       <li>
//         <button onClick={() => jumpTo(move)}>{desc}</button>
//       </li>
//     );
//   });

//   // move & desc 변수로 게임 관련 실행
//   // 참일 경우 게임 실행진행 거짓일 경우 게임 시작 버튼

//   let status;
//   if (winner) {
//     status = 'Winner: ' + winner;
//   } else {
//     status = 'Next Player: ' + (state.xIsNext ? 'x' : 'o');
//   }
//   if (state.stepNumber !== current.squares.length ? 'font-wegint-bold' : '') {
//     status = `Next Play: ${state.xIsNext ? 'x' : 'o'}`;
//   }

// 기본 상태 및 게임 진행관련
// 게임에서 승리할 경우 승리 승리한 플레이어 출력
// 승리자가 안나올 경우 다음 차례 플레이어 출력

// }

// 게임실행시 화면 출력값

export default Game;
