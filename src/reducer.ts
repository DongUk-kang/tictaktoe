import React, { Dispatch } from 'react'
import { GlobalStateContext } from './context/context'
import { GlobalDispatchContext } from './context/context'

type GlobalState = {
  value: string
  index: number
  state: string[]
  stepNumber: number
  xIsNext: Boolean
}

type GlobalAciton = 
  | { type: 'CLICK_SQUARE'; onClick: () => void; }
  | { type: 'CLICK_X_TURN'; onClick: () => void; }
  | { type: 'CLICK_O_TURN'; onClick: () => void; }

export function reducer(state: GlobalState, action: GlobalAciton) {
  switch(action.type) {
    case 'CLICK_SQUARE':
      return {
        ...state,
        action: action.onClick
      }

    case 'CLICK_X_TURN':
      return {
        ...state,
        action: action.onClick
      }

    case "CLICK_O_TURN":
      return {
        ...state,
        action: action.onClick
      }
    
    default:
      throw new Error('에러 수정 필요')
  }
    

}