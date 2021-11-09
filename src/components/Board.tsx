import React from 'react';
import Square from '../components/Square';

type Board = {
  state: string[];
  onClick: (i: number) => void;
};

// Board 타입 "state: string[]"< 으로 정의 "onClick: () => void"로 정의 진행
// state, onClick 타입 재지정 예정
// index를 number 타입으로 지정함

function Board({ state, onClick }: Board) {
  const renderSquare = (i: number) => {
    return <Square value={state[i]} onClick={() => onClick(i)} />;
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

export default Board;
