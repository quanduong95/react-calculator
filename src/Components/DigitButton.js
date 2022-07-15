import {ACTIONS} from "../actions"

export default function DigitButton({ dispatch, digit }) {
  return <button className= "rounded" onClick={() => { dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } }) }}>
          {digit}
        </button>
}