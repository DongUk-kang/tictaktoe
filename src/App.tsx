import React, { useCallback, useState } from 'react';
import { render } from 'react-dom';
import '../src/index.css';

// Square components

type SquareComponent = {
  value: string;
  onClick: () => void;
};
/**
 * SquareProp 라는 객체 타입을 지정 -> 타입명 Square로 수정
 * onClick이벤트는 초기 타입선언시 이벤트리스너 타입으로 지정하였으나
 * 2차로 void로 수정 진행 "onClick: void;" << 해당 선언진행시 타입에러 발생으로인해
 * arrow func 추가하여 에러 수정
 *  -> onclick 이벤트 추가예정
 *
 * value 선언한 any타입 수정예정 11.5일 기준  * value는 any => string으로 수정
 *
 */
function Square({ value, onClick }: SquareComponent) {
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

function App() {
  return;
}

export default App;
