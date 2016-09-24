import React from 'react'
import QuestionColumn from './question-column.js'
import $ from 'jquery'
export default class Table extends React.Component{
  constructor(){
    super();
    this.state = {
      questions: []
    };
  }
  _getQuestions(callback){
    $.getJSON('/configs/sampleQuestions.json')
    .done(callback)
    .error(function(xhr, status, error) {
      console.log(error);
    });
  }
  _getAnswers(){
    let process = (function(data){
      console.log(data.responses)
    });
    $.getJSON('/configs/sampleResponses.json')
    .done(process)
    .error(function(xhr, status, error) {
      console.log(error);
    });
  }

  render(){
    this._getQuestions((data)=>{
      console.log(data.all.length);
      let _questions = [];
      data.all.forEach(function(question){
        _questions.push(question.id+":"+question.question);
      });
      this.setState({questions:_questions});
    });
    let titles = this.state.questions;
    return(
      <table className="table">
      <thead>
        <tr>
          {titles.map(function(title){
              return (<th>{title}</th>);
            })}
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        </tbody>
      </table>
    );
  }
}
