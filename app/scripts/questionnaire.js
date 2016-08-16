import React from 'react'
import SmallText from './question-types/small-text-input.js'
import SmallMultipleOptions from './question-types/small-multiple-options.js'
import SmallRadioOptions from './question-types/small-radio-options.js'
export default class Questionnaire extends React.Component{

  constructor(){
    super();
    this.state = {
      currentQuestion:0,
      currentAnswer:{},
      answers:[]
    }
  }

  _nextFunction(event){
    event.preventDefault();
    this.setState({currentQuestion:this.state.currentQuestion+1});
    let _answers = this.state.answers;
    _answers[this.state.currentQuestion] = this.state.currentAnswer;
    console.log(_answers);
    this.setState({answers:_answers});

  }

  _updateAnswers(answers){
    this.setState({currentAnswer:answers});
  }



  render(){
    let myoptions = [{id:1,description:"Red",selected:false},{id:2,description:"Orange",selected:false}];
    return (<div>
      {(()=>{ switch(this.state.currentQuestion)
       {
      case 1:
        return (<SmallMultipleOptions questionNumber={3} pato={this.state} question="Choose your favorite colors" updateAnswer={this._updateAnswers.bind(this)} options={myoptions} nextFunc={this._nextFunction.bind(this)}/>);
      case 0:
        return (<SmallText questionNumber={4} question="How are you?" skippable={true} updateAnswer={this._updateAnswers.bind(this)} nextFunc={this._nextFunction.bind(this)}/>);
      }
    })()}</div>);
    // return(
    //   <div>
    //     <SmallRadioOptions question="Choose your favorite colors" options={myoptions} nextFunc={this._nextFunction.bind(this)}/>
    //   </div>
    // );
  }

}
