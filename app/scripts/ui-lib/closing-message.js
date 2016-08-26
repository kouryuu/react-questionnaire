import React from 'react'
import {store} from '../store.js'
/* This React Component is used to send the result to your API or server.
*/
export default class ClosingMessage extends React.Component{
  constructor(){
    super();
    this.state = {
      saved: false
    }
  }
  _saveResponses(){
    let responses = JSON.stringify(store());
    let me = this;
    $.post(this.props.posturl,{"responses":responses})
    .done(function(data){
      if(data === "OK"){
        me.setState({saved:true});
      }else{
        // Try again?
      }
    });

  }
  componentDidMount(){
    this._saveResponses();
  }
  render(){
    return(
      <div className="well">
        {(this.state.saved)?
          (<div><h1 className="text-center">{this.props.message}</h1><p className="text-center">{this.props.tip}</p></div>):
          (<div><h1 className="text-center">{this.props.waitmessage}</h1><img src="images/ripple.gif" id="loader" style={{position:"relative",top:"50%",left:"45%"}}/></div>)}
        <br />
        <br />
      </div>
    );
  }
}
