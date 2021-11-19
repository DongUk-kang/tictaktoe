import Boards from './Board';
import React, { useContext } from 'react';
import { GlobalDispatchContext, GlobalStateContext } from '../context/context';
import { clickhiHstory } from '../context/GAME_START';

// interface GameProps {
//   history: { squares: string[] }[];
//   stepNumber: number;
//   winner: string; | any;
//   xIsNext: boolean;
//   clickhistory: (move: number) => void;
//   gamestart: () => void;
     winningIndex: any;
// }

class Game extends React.Component {
  render() {
    const state = useContext(GlobalStateContext);
    const dispatch = useContext(GlobalDispatchContext);

    const history = state.history;
    const current = history[state.stepNumber];
    const winner = state.winner;

    const moves = history.map((step, move) => {
      const desc = move ? 'Move' + move : 'Game Start';
      return (
        <li className={state.stepNumber === move ? 'highlight' : ''} key={move}>
          <button onClick={() => clickhiHstory(move)} style={{
              fontWeight: state.stepNumber === move ? 'bold' : 'normal',
            }}>{desc}
            </button>
        </li>
      );
    });

    let status;
    let winningIndex;
    if (winner) {
      winningIndex = winner.winningIndex;
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Play: ' + (state.xIsNext ? 'x' : 'o');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Boards squares={current.squares} onClick={state.gamestart} winningIndex={winningIndex}/>
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
