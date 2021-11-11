import React from 'react';
import '../src/index.css';
import { Game } from '../src/components/index';
// import { globalReducer, StateContext } from '../src/context/context';

function App(): React.ReactElement {
  // const [state, dispatch] = useReducer(globalReducer, StateContext);
  return <Game />;
}

export default App;
