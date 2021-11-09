import React from 'react';

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

function Square({ value, onClick }: Square) {
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

export default Square;
