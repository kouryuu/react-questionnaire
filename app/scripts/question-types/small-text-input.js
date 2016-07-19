import React from 'react'

export default class SmallText extends React.Component{

  render(){
    return(
      <div className="well">
        <h1 className="text-center">{this.props.question}</h1>
        <input className="form-control" type="text" placeholder={this.props.hint}></input>

        <a href="#" className="btn btn-success btn-centered">Next</a>
      </div>
    );
  }
}
