import React from 'react'
import SmallText from './question-types/small-text-input.js'
import SmallMultipleOptions from './question-types/small-multiple-options.js'
import SmallRadioOptions from './question-types/small-radio-options.js'
export default class Questionnaire extends React.Component{
  constructor(){
    super();
    this.state = {
      currentQuestion:0,
      answers:[]
    }

  }
  _nextFunction(event){

    //this.setState({currentQuestion:this.state.currentQuestion++});
  }



  render(){
    let myoptions = [{id:1,description:"Red",selected:false},{id:2,description:"Orange",selected:false}];
    // return (<div>
    //   {(()=>{ switch(this.state.currentQuestion)
    //    {
    //   case 0:
    //     return (<SmallMultipleOptions question="Choose your favorite colors" options={this.myoptions} nextFunc={nextFunction.bind(this)}/>);
    //   case 1:
    //     return (<SmallText question="How are you?" skippable={true} nextFunc={nextFunction.bind(this)}/>);
    //   }
    // })()}</div>);
    return(
      <div>
        <SmallRadioOptions question="Choose your favorite colors" options={myoptions} nextFunc={this._nextFunction}/>
      </div>
    );
  }

}
