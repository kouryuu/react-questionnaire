import React from 'react'
import Answers from './answers.js'
import $ from 'jquery'
export default class Table extends React.Component{
  constructor(){
    super();
    this.state = {
      questions: [],
      responses: []
    };
  }
  _getQuestions(callback){
    $.getJSON('/configs/sampleQuestions.json')
    .done(callback)
    .error(function(xhr, status, error) {
      console.log(error);
    });
  }
  _getAnswers(callback){
    $.getJSON('/configs/sampleResponses.json')
    .done(callback)
    .error(function(xhr, status, error) {
      console.log(error);
    });
  }
  componentDidMount(){
  this._getQuestions((data)=>{
    let _questions = [];
    data.all.forEach(function(question){
      _questions.push(question.id+": "+question.question);
    });
    this.setState({questions:_questions});
  });
  this._getAnswers((answers)=>{
    this.setState({responses:answers.responses});
  })
  }
  render(){

    let titles = this.state.questions;
    let answers = this.state.responses;
    let header_key = 0;
    return(
      <table className="table table-condensed table-striped">
      <thead>
        <tr>
          {titles.map(function(title){
              return (<th key={header_key++}>{title}</th>);
            })}
        </tr>
        </thead>
        <tbody>
           {answers.map(function(answer){
             return (<Answers answers={answer} />);
           })}
        </tbody>
      </table>
    );
  }
}
