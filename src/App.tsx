import { GameProvider } from './context/context';
import Games from '../src/components/Game';
import {
  GlobalStateContext,
  GlobalDispatchContext,
  reducer,
  initialState,
} from '../src/context/context';
import { useReducer } from 'react';

function App(): React.ReactElement {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        <GameProvider>
          <Games />
        </GameProvider>
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

export default App;
