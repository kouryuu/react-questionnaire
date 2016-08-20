import React from 'react'
export default class Tooltip extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="tip-danger" style={{position:"relative",top:"-90px",left:"60%"}}>
        {this.props.message}
      </div>
    );
  }
}
