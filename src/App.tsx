import React from 'react';
import '../src/index.css';

// Square components

type SquareProp = {
  value: any;
  onClick: () => void;
};
/**
 * SquareProp 라는 객체 타입을 지정
 * value는 any
 * onClick이벤트는 초기 타입선언시 이벤트리스너 타입으로 지정하였으나
 * 2차로 void로 수정 진행 "onClick: void;" << 해당 선언진행시 타입에러 발생으로인해
 * arrow func 추가하여 에러 수정
 *
 * value 선언한 any타입 수정예정 11.5일 기준
 *
 */
function Square(props: SquareProp) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
/**
 * 함수명 Square로 지정
 * 프로퍼티는 위 객체 타입 SquareProp 적용
 * 내용 추가기재예정
 */

// Board Components

type Board = {
  state: string[];
  onClick: () => void;
};

// Board 타입 "state: string[]"< 으로 정의 "onClick: () => void"로 정의 진행
// state, onClick 타입 재지정 예정

function Boardcomponent(props: Board) {
  const renderSquare = (i: number) => {
    return <Square value={undefined} onClick={props.onClick} />;
  };
}

/**
 *  Boardcomponent 함수 생성
 *  renderSquare 상수로 선언하여 절대값으로 고정
 *  에러 내용및 componets 수정 예정 11.5 기준
 *
 */

function App() {
  return;
}

export default App;
