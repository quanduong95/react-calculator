export default function evaluate( {currentOperand,previousOperand,operation} ) {
  const previous = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(previous) || isNaN(current)) {
    return ""
  }
  let computation = 0

  switch (operation) {
    case "+":
      computation = previous + current
      break
    case "-":
      computation = previous - current
      break
    case "*":
      computation = previous * current
      break
    case "÷": 
      computation = previous / current
      break
    default:
      throw new Error('invalid operation')      
  }
  return computation.toString()
}
