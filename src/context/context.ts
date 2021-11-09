import { createContext, useContext } from 'react';
import { GlobalDIspatch, GlobalState, initGlobalState } from './reducer';

export const GlobalStateContext = createContext<GlobalState>(initGlobalState);
export const GlobalDispatchContext = createContext<GlobalDIspatch | undefined>(undefined);

export function useGlobalStateContext(): GlobalState {
  return useContext(GlobalStateContext);
}

export function useGlobalDispatch(): GlobalDIspatch {
  const dispatch = useContext(GlobalDispatchContext);
}

// export function useGlobalStateContext(): G
