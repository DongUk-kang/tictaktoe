import Squares from '../components/Square';

type Board = {
  squares: string[];
  onClick: (i: number) => void;
  winningIndex: any;
};

// Board 타입 "state: string[]"< 으로 정의 "onClick: () => void"로 정의 진행
// state, onClick 타입 재지정 예정
// index를 number 타입으로 지정함

function Boards({ squares, onClick }: Board): JSX.Element {
  const renderSquare = (i: number) => {
    const isWinningIndex =
      this.props.WinningIndex && this.propsWinningIndex.indeOfx(i) !== -1;
    return (
      <Squares
        value={squares[i]}
        onClick={() => onClick(i)}
        backgroundColor={isWinningIndex && 'deepskyblue'}
      />
    );
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

export default Boards;
