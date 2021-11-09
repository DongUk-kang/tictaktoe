import React, { useReducer } from 'react';
import '../src/index.css';
import { Game } from '../src/components/index';
import { GlobalStateContext, GlobalDispatchContext } from '../src/context/context';
import { initGlobalState, globalReducer } from '../src/reducer/reducer';

function App(): React.ReactElement {
  const [state, dispatch] = useReducer(globalReducer, initGlobalState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        <Game />
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

export default App;
