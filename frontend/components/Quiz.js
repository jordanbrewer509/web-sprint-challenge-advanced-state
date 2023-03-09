import React from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, selectAnswer, postAnswer } from '../state/action-creators'

export function Quiz(props) {
  if(!props.quiz) {
    props.fetchQuiz();
  }

  return (
    
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{props.quiz ? `${props.quiz.question}` : "Loading next quiz..."}</h2>

            <div id="quizAnswers">
              <div className={`answer${props.selectedAnswer === 'answerOne' ? ' selected' : ''}`}>
                {props.quiz ? `${props.quiz.answerOne}` : "Loading next answers..."}
                <button onClick={() => props.selectAnswer('answerOne')}>
                {props.selectedAnswer === 'answerOne' ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`answer${props.selectedAnswer === 'answerTwo' ? ' selected' : ''}`}>
                {props.quiz ? `${props.quiz.answerTwo}` : "Loading next answers..."}
                <button onClick={() => props.selectAnswer('answerTwo')}>
                {props.selectedAnswer === 'answerTwo' ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" className='submitBtn' disabled={props.selectedAnswer ? false : true} onClick={() => props.postAnswer(props)}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
  }
}

export default connect(mapStateToProps, {fetchQuiz, selectAnswer, postAnswer})(Quiz)