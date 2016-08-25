import React from 'react'
export default class Navbar extends React.Component{
  render(){
    return(
      <nav className="full-navbar">
        {this.props.title}
      </nav>
    );
  }
}
