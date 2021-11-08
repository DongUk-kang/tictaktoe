import React, { createContext, useContext } from 'react';
// import { GlobalState } '../reducer'

export const GlobalStateContext = createContext(initGlobalState)
export const GlobalDispatchContext = createContext

export function useGlobalStateContext(): GlobalState {
  return useContext(GlobalStateContext)
}

export function useGlobalDispatchContext(): GlobalDispatchType {
  const dispatch = useContext(GlobalDispatchContext)
  if (!dispatch) {
    throw new Error('에러 수정 필요')
  }

  return dispatch
}
