
import evaluate from '../evaluate'


export function chooseOperationHandler(state, payload) {
  if (state.currentOperand == null && state.previousOperand == null) {
    return state
  }
  if (state.previousOperand == null) {
    return {
      ...state, 
      operation: payload.operation,
      previousOperand: state.currentOperand,
      currentOperand: null,
    }
  } 
  if (state.currentOperand == null) {
    return {
      ...state, 
      operation: payload.operation
    }
  }
  return {
    ...state,
    previousOperand: evaluate(state),
    operation: payload.operation,
    currentOperand: null
  }

}