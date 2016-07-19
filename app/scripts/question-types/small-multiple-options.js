import React from 'react'
export default class SmallMultipleOptions extends React.Component{
  constructor(){
    super();

  }


  _addOption(event){
    event.preventDefault();
    console.log(event);
  }
  render(){
    let _generateOptions = (function(options){
      return(
        <ul className="options-ul text-center">
        {options.map(function(option){
            return (
              <Option selected={option.selected} id={option.id} key={option.id} description={option.description}></Option>
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
        {_generateOptions(this.props.options)}
        <a href="#" className="btn btn-success btn-centered">Next</a>


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
      this.setState({selected:!this.state.selected});
    }

}
