import Boards from './Board';
import React, { useContext } from 'react';
import { GlobalStateContext } from '../context/context';
import { clickhiHstory, gameStart } from '../context/GAME_START';

<<<<<<< HEAD
// interface GameProps {
//   history: { squares: string[] }[];
//   stepNumber: number;
//   winner: string; | any;
//   xIsNext: boolean;
//   clickhistory: (move: number) => void;
//   gamestart: () => void;
//  winningIndex: any;
// }
=======
interface GameProps {
  history: { squares: string[] }[];
  stepNumber: number;
  winner: string | any;
  xIsNext: boolean;
  clickhistory: (move: number) => void;
  gamestart: () => void;
  isDisplayOrderByAsc: boolean;
  winningIndex: any;
}
>>>>>>> master

class Game extends React.Component {
  render() {
    const state = useContext(GlobalStateContext);
    const history = state.history;
    const current = history[state.stepNumber];
    const winner = state.winner;

    const moves = history.map((step, move) => {
      const desc = move ? 'Move' + move : 'Game Start';
      return (
<<<<<<< HEAD
        <li className={state.stepNumber === move ? 'highlight' : ''} key={move}>
          <button
            onClick={() => clickhiHstory(move)}
            style={{
              fontWeight: state.stepNumber === move ? 'bold' : 'normal',
=======
        <li
          className={this.props.stepNumber === move ? 'highlight' : ''}
          key={move}
        >
          <button
            onClick={() => this.props.clickhistory(move)}
            style={{
              fontWeight: this.state.stepNumber === move ? 'bold' : 'normal',
>>>>>>> master
            }}
          >
            {desc}
          </button>
        </li>
      );
    });

    let status;
    let winningIndex;
    if (winner) {
      status = 'Winner: ' + winner;
      winningIndex = winner.winningIndex;
    } else {
      status = 'Next Play: ' + (state.xIsNext ? 'x' : 'o');
    }

    return (
      <div className="game">
        <div className="game-board">
<<<<<<< HEAD
          <Boards squares={current.squares} onClick={gameStart} />
=======
          <Boards
            squares={current.squares}
            onClick={this.props.gamestart}
            winningIndex={winningIndex}
          />
>>>>>>> master
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
