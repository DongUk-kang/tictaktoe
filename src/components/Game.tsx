import { useGameDispatch, useGameState } from '../context/context';
import Boards from './Board';

function calc(squares: string[] | any): any {
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


function Game() {
  const state = useGameState();
  const dispatch = useGameDispatch();

  const setGame = () => dispatch({ type: 'GAME_START', index: 0 });
  const setBoard = () => dispatch({ type: 'CLICK_HISTORY', index: 0 });

  const moves = (state.history = () => {
    const desc = moves ? 'Go To Move #' + moves : 'Game Start';
    return (
      <li>
        <button onClick={setBoard}>{desc}</button>
      </li>
    );
  });

  const current = state.history;
  const winner = calc(current.squares);

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    if (state.stepNumber >= 9) {
      status = 'Draw';
    } else {
      status = 'Next Player: ' + (state.xIsNext ? 'x' : 'o');
    }
  }
  if (state.stepNumber !== current.squares.length ? 'font-wegint-bold' : '') {
    status = `Next Play: ${state.xIsNext ? 'x' : 'o'}`;
  }

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Boards state={setGame} onClick={setBoard} props={undefined} />
        </div>
        <div className="game-info">
          <div>{status}</div>{' '}
        </div>
      </div>
    </>
  );
}

  export default Game;
