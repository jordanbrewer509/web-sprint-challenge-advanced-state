import React from 'react'
import { moveCounterClockwise } from '../state/action-creators.js'

export default function Wheel(props) {
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog {props.active ? 'active' : ''}" style={{ "--i": 0 }}>{props.active ? 'B' : ''}</div>
        <div className="cog {props.active ? 'active' : ''}" style={{ "--i": 1 }}>{props.active ? 'B' : ''}</div>
        <div className="cog {props.active ? 'active' : ''}" style={{ "--i": 2 }}>{props.active ? 'B' : ''}</div>
        <div className="cog {props.active ? 'active' : ''}" style={{ "--i": 3 }}>{props.active ? 'B' : ''}</div>
        <div className="cog {props.active ? 'active' : ''}" style={{ "--i": 4 }}>{props.active ? 'B' : ''}</div>
        <div className="cog {props.active ? 'active' : ''}" style={{ "--i": 5 }}>{props.active ? 'B' : ''}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn">Counter clockwise</button>
        <button id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}
