import React from 'react'
import SmallText from './question-types/small-text-input.js'
import NextButton from './ui-lib/next-button.js'
import SmallMultipleOptions from './question-types/small-multiple-options.js'
import SmallUniqueOptions from './question-types/small-unique-options.js'
/* This function returns an array of QuestionType components defined in the questions_json.
*/
export default function generate_questions(questions_json,_nextFunction,parent){
let required = questions_json.required;
let questions = questions_json.all;
let jsx_objects_array = [];
function is_required(id){
  for(let i=0;i < required.length;i++){
    if(id == required[i]){
      return true;
    }
  }
  return false;
}
questions.forEach(function(question,index){
  switch(question.type){
  case "small-text-input":
      jsx_objects_array.push(<div className="well"><SmallText questionNumber={question.id} question={question.question} /><NextButton skippable={is_required(question.id)} nextFunc={_nextFunction.bind(parent,is_required(question.id))}/></div>);
    break;
  case "small-multiple-options":
      jsx_objects_array.push(<div className="well"><SmallMultipleOptions questionNumber={question.id} question={question.question} options={question.options}/><NextButton skippable={is_required(question.id)} nextFunc={_nextFunction.bind(parent,is_required(question.id))}/></div>);
    break;
  case "small-unique-options":
      jsx_objects_array.push(<div className="well"><SmallUniqueOptions questionNumber={question.id} question={question.question} options={question.options}/><NextButton skippable={is_required(question.id)} nextFunc={_nextFunction.bind(parent,is_required(question.id))}/></div>);
    break;
  }
});
return jsx_objects_array;
}
