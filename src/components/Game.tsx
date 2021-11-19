import Boards from './Board';
import React, { useContext } from 'react';
import { GlobalStateContext } from '../context/context';
import { clickhiHstory, gameStart } from '../context/GAME_START';

// interface GameProps {
//   history: { squares: string[] }[];
//   stepNumber: number;
//   winner: string; | any;
//   xIsNext: boolean;
//   clickhistory: (move: number) => void;
//   gamestart: () => void;
//  winningIndex: any;
// }

class Game extends React.Component {
  render() {
    const state = useContext(GlobalStateContext);
    const history = state.history;
    const current = history[state.stepNumber];
    const winner = state.winner;

    const moves = history.map((step, move) => {
      const desc = move ? 'Move' + move : 'Game Start';
      return (
        <li className={state.stepNumber === move ? 'highlight' : ''} key={move}>
          <button
            onClick={() => clickhiHstory(move)}
            style={{
              fontWeight: state.stepNumber === move ? 'bold' : 'normal',
            }}
          >
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Play: ' + (state.xIsNext ? 'x' : 'o');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Boards squares={current.squares} onClick={gameStart} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol className="game-info-moves">{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
