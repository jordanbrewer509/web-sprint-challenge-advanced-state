import React from 'react'
import { connect } from 'react-redux'
import { setQuiz } from '../state/action-creators'

export function Quiz(props) {
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{props.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={() => setQuiz()}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}


const mapStateToProps = state => {
  return {
    question: state.question,
    answers: null,
  }
}

export default connect(mapStateToProps, {setQuiz})(Quiz)