import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { postQuiz, inputChange, resetForm } from '../state/action-creators'


export function Form(props) {
  const onSubmit = evt => {
    evt.preventDefault()
    props.postQuiz(props.form)
    props.resetForm()
  }

  function onChange(evt) {
    evt.preventDefault()
    props.inputChange(evt.target)
  }

  function isDisabled() {
    if(props.form.newQuestion.trim().length > 1 && props.form.newTrueAnswer.trim().length > 1 && props.form.newFalseAnswer.trim().length > 1) {
      return true
    } else {
      return false
    }
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input value={props.form.newQuestion} maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input value={props.form.newTrueAnswer} maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input value={props.form.newFalseAnswer} maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button disabled={!isDisabled()} id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, {postQuiz, inputChange, resetForm})(Form)
