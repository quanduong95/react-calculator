
export function addDigitHandler(state, payload) {
  if (state.overwrite) {
    return {
      ...state, 
      currentOperand: payload.digit,
      overwrite: false
    }
      
  }
  if (payload.digit === "0" && state.currentOperand === "0") {
    return state
  }
  state.currentOperand = state.currentOperand || ""
  if (payload.digit === "." && state.currentOperand.includes(".")) {
    return state
  }
  if (payload.digit === "." && state.currentOperand === "") {
    return {
      ...state, 
      currentOperand: '.'
    }
  }
  return {
    ...state,
    currentOperand: `${state.currentOperand || ""}${payload.digit}`
  }
}
