import { useGameDispatch, useGameState } from '../context/context';
import Boards from './Board';

export function calc(squares: any) {
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
      return;
    }
  }
  return null;
}

///
function Game() {
  let state = useGameState();
  const dispatch = useGameDispatch;

  const setStartGame = dispatch({ type: 'START_GAME', move: true });
  const clickgame = dispatch({ type: 'CLICK_BOARD', move: true });
  const setHistory = dispatch({
    type: 'CLICK_HISTORY',
    history: {
      squares: Array(9).fill(null),
    },
  });

  const moves = (state.history = () => {
    const desc = moves ? 'Go to move #' + moves : 'Go To Game Start';
    return (
      <li>
        <button onClick={clickgame}>{desc}</button>
      </li>
    );
  });

  const current = state.history;
  const winner = calc(current);

  let status;
  if (winner) {
    state = 'Winner: ' + winner;
  } else {
    if (state.stepNumber >= 9) {
      status = 'Draw';
    } else {
      status = 'Next Player: ' + (state.xIsNext ? 'x' : 'o');
    }
  }
  if (state.stepNumber !== current.squares.length) {
    status = `Next Play: ${state.xIsNext ? 'x' : 'o'}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Boards
          state={setStartGame}
          onClick={clickgame}
          props={undefined}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
