import { ACTIONS } from "./actions"
import evaluate from './evaluate'
import { addDigitHandler } from './cases/addDigitHandler'
import { chooseOperationHandler } from './cases/chooseOperationHandler'
import { deleteDigitHandler } from './cases/deleteDigitHandler'
import { evaluateHandler} from './cases/evaluateHandler'


function reducer(state, {type, payload}) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return addDigitHandler(state, payload)
    case ACTIONS.CHOOSE_OPERATION:
      return chooseOperationHandler(state,payload)
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.DELETE_DIGIT: 
      return deleteDigitHandler(state)
    case ACTIONS.EVALUATE: 
      return evaluateHandler(state)
    default: 
      throw new Error('invalid action ')
  }
}

export default reducer