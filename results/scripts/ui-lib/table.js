import React from 'react'
import QuestionColumn from './question-column.js'
import $ from 'jquery'
export default class Table extends React.Component{

  _getQuestions(){
    $.getJSON('configs/sampleResponses.json').done(function(data){
    console.log(data);
  }).error(function(data){
  console.log(data);
});

  }
  render(){
    this._getQuestions();
    return(
      <table className="table">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
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
