import { createContext, useContext } from 'react';
import { GlobalState, initGlobalState, GlobalDispatch } from './reducer';

export const GlobalStateContext = createContext<GlobalState>(initGlobalState);
export const GlobalDispatchContext = createContext<GlobalDispatch | undefined>(undefined);

export function useGlobalStateContext(): GlobalState {
  return useContext(GlobalStateContext);
}

export function useGlobalDispatch() {
  const dispatch = useContext(GlobalDispatchContext);
}
