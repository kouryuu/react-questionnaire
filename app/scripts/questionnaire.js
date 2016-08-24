import React from 'react'
import {store} from './store.js'
import Tooltip from './ui-lib/tooltip.js'
import generate_questions from './generate_questions.js'
import NextButton from './ui-lib/next-button.js'
import ClosingMessage from './ui-lib/closing-message.js'
export default class Questionnaire extends React.Component{
  constructor(){
    super();
    this.state = {
      currentQuestion:0,
      tipAlert:false
    }
  }
  _nextFunction(skip){
    //event.preventDefault();
    if(skip ||
       (store()[this.state.currentQuestion] !== undefined && store()[this.state.currentQuestion] !== "")){
    this.setState({tipAlert:false});
    this.setState({currentQuestion:this.state.currentQuestion+1});
    }else{
    this.setState({tipAlert:true});
    }
  }
  render(){
    let questions = generate_questions(this.props.questions,this._nextFunction,this);
    return (
    <div>
      {(()=>{
        if(this.state.currentQuestion === 0)
          return (<div className="well question"><h2 className="text-center">{this.props.questions.configs.welcome}</h2><p className="text-center">{this.props.questions.configs.tip}</p><NextButton skippable={false} nextFunc={this._nextFunction.bind(this,true)}/></div>);
        if(this.state.currentQuestion > 0 && this.state.currentQuestion <= questions.length)
          return (questions[this.state.currentQuestion-1]);
        return(<ClosingMessage posturl={this.props.questions.posturl} message={this.props.questions.configs.closingmessage} tip={this.props.questions.configs.closingtip} waitmessage={this.props.questions.configs.waitmessage} />)
    })()}
    {(this.state.tipAlert)?<Tooltip message={this.props.questions.configs.tooltip}></Tooltip>:null}

  </div>);
  }

}
