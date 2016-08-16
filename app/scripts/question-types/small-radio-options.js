import React from 'react'
import NextButton from '../ui-lib/next-button.js'
export default class SmallRadioOptions extends React.Component{
  constructor(){
    super();
    this.state = {
      selected: null
    }
  }
  _selectOne(event,selected){
    //event.preventDefault();
    console.log(selected);
      //this.setState({selected:selected});
    };
  render(){
    let _generateOptions = (function(options,selected,selectFunction){
      return(
        <ul className="options-ul text-center">
        {options.map(function(option){
            return (
                <li className={(selected === option.id)?"selected":"unselected"} key={option.id}>
                  <a href="#" className="select-link" onClick={selectFunction(option.id)}>
                    {option.description}
                  </a>
                </li>
              );
              }
                    )
        }
        </ul>
      );
    });
    return(
      <div className="well">
        <h1 className="text-center">{this.props.question}</h1>
        {_generateOptions(this.props.options,this.state.selected,this._selectOne.bind(this))}
        <NextButton skippable={this.props.skippable} nextFunc={this.props.nextFunc}/>

      </div>
    );
  }
}
