import React, { Component } from 'react';
import * as timerStates from '../../timerStates'

class TimerButton extends Component {

  constructor () {
    super ();
    this.getButton = this.getButton.bind(this);
  }

  getButton () {
    if(this.props.timerState === timerStates.NOT_SET)
      return (
       <button className="btn btn-success center-block" onClick={this.props.startTimer}>Start</button>
     )
    if(this.props.timerState === timerStates.RUNNING)
      return (
        <button className="btn btn-danger center-block" onClick={this.props.startTimer}>Stop</button>
      )
  }

  render = () => (
      <div className='row'>
        <br/>
        {this.getButton()}
      </div>
    )
}

export default TimerButton;
