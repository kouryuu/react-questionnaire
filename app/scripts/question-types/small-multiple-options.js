import React from 'react'
import {store} from '../store.js'
/* This React Component is used to render a small array of options that could have one or more answers
*/
export default class SmallMultipleOptions extends React.Component{
  constructor(){
    super();
  }

  render(){
    let _generateOptions = (function(options,_questionNumber){
      return(
        <div className="row">
          <div className="col-md-4"></div>
        <ul  className="col-md-4 options-ul">
        {options.map(function(option){
            return (
              <Option questionNumber={_questionNumber} selected={option.selected} id={option.id} key={option.id} description={option.description}></Option>
            );
              }
                    )
        }
        </ul>
      </div>
      );
    });
    $('.options-ul li').removeClass('selected');
    $('.options-ul li').addClass('unselected');
    return(
      <div>
        <h1 className="text-center">{this.props.question}</h1>
        {_generateOptions(this.props.options,this.props.questionNumber)}
      </div>
    );
  }
}
class Option extends React.Component{
  constructor(){
    super();
    this.state = {
      selected: false
    };
  }
  render(){
    return(
      <li className={(this.state.selected)?"selected":"unselected"} key={this.props.id}>
        <a href="#" className="select-link" onClick={this._addOption.bind(this)}>
          {this.props.description}
        </a>
      </li>);
    }
    _addOption(event){
      event.preventDefault();
      if(!this.state.selected){
      store(this.props.questionNumber,this.props.description,{ElementType:"multiple",type:"add"});
      }else{
      store(this.props.questionNumber,this.props.description,{ElementType:"multiple",type:"remove"});
      }
      this.setState({selected:!this.state.selected});

    }

}
