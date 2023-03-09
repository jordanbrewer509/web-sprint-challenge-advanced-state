import React from 'react'
import { connect } from 'react-redux'
import { setMessage } from '../state/action-creators'

function Message(props) {
  return <div id="message">{props.message ? props.message : ''}</div>
}

const mapStateToProps = (state) => {
  return {message: state.infoMessage}
}

export default connect(mapStateToProps, {setMessage})(Message)