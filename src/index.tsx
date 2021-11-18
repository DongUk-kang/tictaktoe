import ReactDOM from 'react-dom';
import App from './components/App';
import { GameProvider } from '../src/context/context';
import '../src/index.css';

ReactDOM.render(
  <GameProvider>
    <App />
  </GameProvider>,
  document.getElementById('root')
);
