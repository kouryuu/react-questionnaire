import React from 'react'
import NextButton from '../ui-lib/next-button.js'
export default class SmallText extends React.Component{
  render(){
    return(
      <div className="well">
        <h1 className="text-center">{this.props.question}</h1>
        <input className="form-control" type="text" placeholder={this.props.hint}></input>
        <NextButton skippable={this.props.skippable} nextFunc={this.props.nextFunc}/>
      </div>
    );
  }
}
