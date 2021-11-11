import { createContext, useContext } from 'react';
import {
  globalDistpatch,
  GlobalState,
  initGlobalState,
} from '../context/reducer';

export const GlobalStateContext = createContext<GlobalState>(initGlobalState);
export const globalDistpatchContext = createContext<
  globalDistpatch | undefined
>(undefined);

export function useGlobalStateContext(): GlobalState {
  return useContext(GlobalStateContext);
}

export function useGlobalDispatchContext(): globalDistpatch {
  const dispatch = useContext(globalDistpatchContext);
  if (!dispatch) {
    throw new Error('에러 발생');
  }
  return dispatch;
}
