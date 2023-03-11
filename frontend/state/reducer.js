// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { 
  MOVE_CLOCKWISE, 
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  GET_QUIZ_ERROR,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM
} from './action-creators'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_CLOCKWISE:
      return action.payload
    case MOVE_COUNTERCLOCKWISE:
      return action.payload
    default: 
      return state
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case SET_QUIZ_INTO_STATE:
      return action.payload
    case GET_QUIZ_ERROR:
      return {
        ...state, 
        payload: action.payload
      }
    default:
      return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case SET_SELECTED_ANSWER:
      return action.payload
    default:
      return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case SET_INFO_MESSAGE:
      return action.payload
    default:
  return state
  }
}
const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
    case INPUT_CHANGE:
      if(action.payload.id === "newQuestion") {
        return {...state, newQuestion: action.payload.value}
      } else if(action.payload.id === "newTrueAnswer") {
        return {...state, newTrueAnswer: action.payload.value}
      } else if(action.payload.id === "newFalseAnswer") {
        return {...state, newFalseAnswer: action.payload.value}
      }
    case RESET_FORM: 
      return initialFormState
  default:
    return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
