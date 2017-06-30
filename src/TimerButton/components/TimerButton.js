import React from 'react';

const TimerButton = (props) => (
  <div className='row'>
    <br/>
    <button className="btn btn-success center-block" onClick={props.startTimer}>Start</button>
  </div>
)

export default TimerButton;
