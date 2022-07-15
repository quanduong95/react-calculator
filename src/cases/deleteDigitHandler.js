
export function deleteDigitHandler(state) { 
  if (state.overwrite) { 
    return {
      ...state,
      overwrite: false,
      currentOperand: null,
    }  
  }
  if (state.currentOperand == null) {
    return state
  }
  if (state.currentOperand.length === 1) {
    return {
      ...state, 
      currentOperand: null 
    }
  }

  return {
    ...state, 
    currentOperand: state.currentOperand.slice(0,-1)
  }
}