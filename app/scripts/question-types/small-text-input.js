import React from 'react'
import {store} from '../store.js'
export default class SmallText extends React.Component{
  _updateAnswers(event){
    store(this.props.questionNumber,event.target.value,{ElementType:"text"});
  }
  render(){

    return(
      <div>
        <h1 className="text-center">{this.props.question}</h1>
        <input className="form-control" type="text" placeholder={this.props.hint} onChange={this._updateAnswers.bind(this)}></input>
      </div>
    );
  }
}
