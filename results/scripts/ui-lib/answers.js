import React from 'react'
export default class Answers extends React.Component{

  render(){
    let answer_key = 0;
    return(
      <tr>
        {this.props.answers.map(function(answer){
          return (<Answer key={answer_key++} isArray={(answer instanceof Array)} answer={answer} />);
        })}
      </tr>
    );
  }
}
class Answer extends React.Component{

  render(){
    return(
      <td>
        {(this.props.isArray)?this.props.answer.join(','):this.props.answer}
      </td>
    );
  }
}
