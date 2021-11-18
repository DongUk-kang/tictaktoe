import React from 'react';
import '../src/index.css';
import { GameProvider } from '../src/context/context';
import Game from './components/Game';

const App: React.FC = () => (
  <GameProvider>
    <Game />
  </GameProvider>
);

export default App;
