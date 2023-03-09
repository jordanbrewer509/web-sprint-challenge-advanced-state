import axios from "axios"

// ❗ You don't need to add extra action creators to achieve MVP
export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE'
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE'
export const SET_QUIZ_INTO_STATE = 'SET_QUIZ_INTO_STATE'
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
  
export function selectAnswer(state) {
  return { type: SET_SELECTED_ANSWER, payload: state}
}

export function setMessage(message) {
  return { type: SET_INFO_MESSAGE, payload: message}
}

export const setQuiz = (quiz) => {
  return {type: SET_QUIZ_INTO_STATE, payload: quiz}
}

const getQuizError = (message) => {
  return {type: GET_QUIZ_ERROR, payload: message}
}

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state

    axios.get('http://localhost:9000/api/quiz/next')
    .then((res) => {
      const quiz = {
        question: res.data.question, 
        quizId: res.data.quiz_id,
        answerOne: res.data.answers[0].text, 
        answerTwo: res.data.answers[1].text,
        answerOneId: res.data.answers[0].answer_id,
        answerTwoId: res.data.answers[1].answer_id
      };
      dispatch(setQuiz(quiz))
    }, (error) => {
      const message = error.message
      dispatch(getQuizError(message))
    })
    return {type: SET_QUIZ_INTO_STATE, payload: {data: "hello"}}
}}
export function postAnswer(state) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz

    axios.post("http://localhost:9000/api/quiz/answer", {
      quiz_id: state.quiz.quizId,
      answer_id: state.quiz[`${state.selectedAnswer}Id`]
    }) 
    .then((res) => {
      dispatch(selectAnswer(null))
      dispatch(setMessage(res.data.message))
      dispatch(fetchQuiz())
    })
    .catch((err) => {
      console.log(err)
    })
    
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
