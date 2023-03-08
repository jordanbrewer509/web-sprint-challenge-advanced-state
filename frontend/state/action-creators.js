import axios from "axios"

// ❗ You don't need to add extra action creators to achieve MVP
export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE'
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE'
export const SET_QUIZ_INTO_STATE = 'SET_QUIZ_INTO_STATE'
export const GET_QUIZ_SUCCESS = "GET_QUIZ_SUCCESS"
export const GET_QUIZ_ERROR = "SET_QUIZ_ERROR"
export const SET_SELECTED_ANSWER = 'SET_SELECTED_ANSWER'
export const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE'
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const RESET_FORM = 'RESET_FORM'


export function moveClockwise(state) { 
  return { type: MOVE_CLOCKWISE, payload: state > 4 ? 0 : state + 1 }
}

export function moveCounterClockwise(state) {
  return { type: MOVE_COUNTERCLOCKWISE, payload: state < 1 ? 5 : state - 1}
}
  
export function selectAnswer() { }

export function setMessage() { }

export const setQuiz = () => dispatch => {
  axios.get('http://localhost:9000/api/quiz/next')
    .then((res) => {
      console.log(res)
      const quiz = {question: res.data};
      dispatch(getQuizSuccess(quiz))
    }, (error) => {
      const message = error.message
      dispatch(getQuizError(message))
    })
    return {type: SET_QUIZ_INTO_STATE, payload: {data: 'hello'}}
}

const getQuizError = (message) => {
  return {type: SET_QUIZ_ERROR, payload: message}
}

const getQuizSuccess = (quiz) => {
  return {type: GET_QUIZ_SUCCESS, payload: quiz}
}

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
