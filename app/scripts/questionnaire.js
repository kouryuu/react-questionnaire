import React from 'react'
import SmallText from './question-types/small-text-input.js'
import SmallMultipleOptions from './question-types/small-multiple-options.js'
import SmallUniqueOptions from './question-types/small-unique-options.js'
import {store} from './store.js'
import Tooltip from './ui-lib/tooltip.js'
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
    let myoptions = [{id:1,description:"Pizza",selected:false},{id:2,description:"Hamburger",selected:false}];
    let myoptions2 = [{id:1,description:"Red",selected:false},{id:2,description:"Orange",selected:false}];
    return (<div>
      {(()=>{ switch(this.state.currentQuestion)
       {
      case 2:
      return (<SmallUniqueOptions  questionNumber={2}  question="Choose your favorite food" options={myoptions} nextFunc={this._nextFunction.bind(this,false)}/>);
      case 1:
        return (<SmallMultipleOptions questionNumber={1} question="Choose your favorite color"  options={myoptions2} nextFunc={this._nextFunction.bind(this,false)}/>);
      case 0:
        return (<SmallText questionNumber={0} question="How are you?" skippable={true} nextFunc={this._nextFunction.bind(this,true)}/>);

      }
    })()}
    {(this.state.tipAlert)?<Tooltip message="You must answer to continue."></Tooltip>:null}

  </div>);
    return(
      <div>

      </div>
    );
  }

}
