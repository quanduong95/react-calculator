import { useReducer } from 'react';
import './styles.css'
import {ACTIONS} from "./actions"
import reducer from "./reducer"
import DigitButton from './Components/DigitButton'
import OperationButton from './Components/OperationButton'

const intFormatter = new Intl.NumberFormat("en-us", {maximumFractionDigits: 0})

function formatOperand(operand) {
  if (operand == null) return
  const [integer, decimal] = operand.split('.')
  if (decimal == null) return intFormatter.format(integer)
  return operand
}

function App() {

  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})

  return (
    <div>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{formatOperand(previousOperand)}{operation}</div>
          <div className="current-operand">{formatOperand(currentOperand)}</div>
        </div>
        <button className= "span-two" onClick={()=> dispatch({type: ACTIONS.CLEAR})}>AC</button>
        <button className="del-btn" onClick ={()=> {dispatch({type: ACTIONS.DELETE_DIGIT})}}>DEL</button>
        <OperationButton operation="÷" dispatch={dispatch} >÷</OperationButton>
        <DigitButton digit="1" dispatch={dispatch} >1</DigitButton>
        <DigitButton digit="2" dispatch={dispatch} >2</DigitButton>
        <DigitButton digit="3" dispatch={dispatch} >3</DigitButton>
        <OperationButton operation="*" dispatch={dispatch} >*</OperationButton>
        <DigitButton digit="4" dispatch={dispatch} >4</DigitButton>
        <DigitButton digit="5" dispatch={dispatch} >5</DigitButton>     
        <DigitButton digit="6" dispatch={dispatch} >6</DigitButton>
        <OperationButton operation="+" dispatch={dispatch} >+</OperationButton>      
        <DigitButton digit="7" dispatch={dispatch} >7</DigitButton>
        <DigitButton digit="8" dispatch={dispatch} >8</DigitButton>      
        <DigitButton digit="9" dispatch={dispatch} >9</DigitButton>
        <OperationButton operation="-" dispatch={dispatch} >-</OperationButton>      
        <DigitButton digit="." dispatch={dispatch} >.</DigitButton>
        <DigitButton digit="0" dispatch={dispatch} >0</DigitButton>
        <button className= "span-two" onClick={()=>dispatch({type: ACTIONS.EVALUATE})}>=</button>
      </div>
    </div>
  );
}

export default App;
