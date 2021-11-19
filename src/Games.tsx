import Boards from './components/Board';
import React from 'react';

interface GameProps {
  history: { squares: string[] }[];
  stepNumber: number;
  winner: string;
  xIsNext: boolean;
  clickhistory: (move: number) => void;
  gamestart: () => void;
}

export class Games extends React.Component<GameProps> {
  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = this.props.winner;

    const moves = history.map((step, move) => {
      const desc = move ? 'Move' + move : 'Game Start';
      return (
        <li
          className={this.props.stepNumber === move ? 'highlight' : ''}
          key={move}
        >
          <button onClick={() => this.props.clickhistory(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Play: ' + (this.props.xIsNext ? 'x' : 'o');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Boards squares={current.squares} onClick={this.props.gamestart} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol className="game-info-moves">{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Games;
