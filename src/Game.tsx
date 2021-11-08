import React, { useCallback, useState } from 'react';
import '../src/index.css';

// Square components

type Square = {
  value: string;
  onClick: () => void;
};
// /**
//  * SquareProp 라는 객체 타입을 지정 -> 타입명 Square로 수정
//  * onClick이벤트는 초기 타입선언시 이벤트리스너 타입으로 지정하였으나
//  * 2차로 void로 수정 진행 "onClick: void;" << 해당 선언진행시 타입에러 발생으로인해
//  * arrow func 추가하여 에러 수정
//  *  -> onclick 이벤트 추가예정
//  *
//  * value 선언한 any타입 수정예정 11.5일 기준  * value는 any => string으로 수정
//  *
//  */

// const SquareContext = React.createContext(defaultValue);

function Squares({ value, onClick }: Square) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
/**
 * 함수명 Square로 지정
 * 프로퍼티는 위 객체 타입 Square 적용
 * 내용 추가 예정 -> value와 onclick에 앞에 선언한 props. 삭제
 */

// Board Components

type Board = {
  state: string[];
  onClick: (i: number) => void;
};

// Board 타입 "state: string[]"< 으로 정의 "onClick: () => void"로 정의 진행
// state, onClick 타입 재지정 예정
// index를 number 타입으로 지정함

function Boardcomponent({ state, onClick }: Board) {
  const renderSquare = (i: number) => {
    return <Squares value={state[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

/**
 *  Boardcomponent 함수 생성
 *  renderSquare 상수로 선언하여 절대값으로 고정
 *  에러 내용및 componets 수정 예정 11.5 기준
 *  보드 타입에 선언한 state, onclick을 보드 펑션에 적용
 * /**
 * 랜더링할 Square 컴포넌트의 value와 onClick을 인덱스값 넣어줌
 * renderSquare로 게임판? 게임보드?렌더링 후 생성
 */

function calc(squares: string[]) {
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

  for (let i = 0; i < line.length; i++) {
    const [a, b, c] = line[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/*
 * 계산 펑션 생성에 squeares는 string타입 지정
 * line 상수로 승리 조건 (3칸이 모두 같은모양일때 승리)
 * 반복문 활용 index 변수를 0으로 지정 line의length가 index보다 크면 i는 하나씩 커짐
 *  line[i]를 [a,b,c]로 상수화 진행
 *  if문을 활용 squares[a] && squares[a] 과 squares[b] && squares[a] 과 squares[c] 같으면 squares[a]리턴
 */

//Game components

function Game() {
  const [state, setState] = useState({
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
    stepNumber: 0,
  });

  /**
   * game class component -> function으로 변경
   */

  const current = state.history[state.stepNumber];
  const winner = calc(current.squares);
  const onClick = useCallback(
    (i) => {
      const history = state.history.slice(0, state.stepNumber + 1);
      const square = current.squares.slice();
      if (calc(square) || square[i]) {
        return null;
      }
      square[i] = state.xIsNext ? 'x' : 'o';
      setState({
        ...state,
        history: history.concat([{ squares: square }]),
        xIsNext: !state.xIsNext,
        stepNumber: history.length,
      });
    },
    [state, current]
  );

  const jumpTo = (step: number) => {
    setState({
      ...state,
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  };

  const moves = state.history.map((step: object, move: number) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next Player: ' + (state.xIsNext ? 'x' : 'o');
  }
  return (
    <div className="game">
      <div className="game-board">
        <Boardcomponent state={current.squares} onClick={(i) => onClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
