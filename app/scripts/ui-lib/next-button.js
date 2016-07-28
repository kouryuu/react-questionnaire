import React from 'react'
export default class NextButton extends React.Component{
  render(){
    return(
      <div className="row next-button">
        <div className="col-xs-2 col-xs-offset-5">
      {(this.props.skippable)?<a href="#" onClick={this.props.nextFunc} className="btn btn-default">Skip</a>:null}
      &nbsp;
      <a href="#" className="btn btn-success" onClick={this.props.nextFunc}>Next</a>
      </div>
    </div>
    );
  }
}
