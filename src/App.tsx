import React, { useReducer } from 'react';
import '../src/index.css';
import { Game } from '../src/components/index';
import { globalReducer, initGlobalState } from '../src/context/reducer';
import {
  GlobalStateContext,
  globalDistpatchContext,
} from '../src/context/context';

function App(): React.ReactElement {
  const [state, dispatch] = useReducer(globalReducer, initGlobalState);
  return (
    <GlobalStateContext.Provider value={state}>
      <globalDistpatchContext.Provider value={dispatch}>
        <Game />
      </globalDistpatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

export default App;
