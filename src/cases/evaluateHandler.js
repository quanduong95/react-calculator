import evaluate from '../evaluate'

export function evaluateHandler(state) {
  if  ( state.currentOperand == null ||
    state.previousOperand == null ||
    state.operation == null
  ) {
  return state
  }
  return {
    ...state,
    overwrite: true,
    previousOperand: null,
    operation: null,
    currentOperand: evaluate(state),
  }
}