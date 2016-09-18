import React from 'react'
import SmallText from './question-types/small-text-input.js'
import NextButton from './ui-lib/next-button.js'
import SmallMultipleOptions from './question-types/small-multiple-options.js'
import SmallUniqueOptions from './question-types/small-unique-options.js'
import SmallMultipleImageOptions from './question-types/small-multiple-image-options.js'
/* This function returns an array of QuestionType components defined in the questions_json.
*/
export default function generate_questions(questions_json,_nextFunction,parent){
let skippable= questions_json.skippable;
let questions = questions_json.all;
let jsx_objects_array = [];
function is_required(id){
  for(let i=0;i < skippable.length;i++){
    if(id == skippable[i]){
      return true;
    }
  }
  return false;
}
questions.forEach(function(question,index){
  switch(question.type){
  case "small-text-input":
      jsx_objects_array.push(<div className="well question"><SmallText questionNumber={question.id} question={question.question} /><NextButton skippable={is_required(question.id)} nextFunc={_nextFunction.bind(parent,is_required(question.id))}/></div>);
    break;
  case "small-multiple-options":
      jsx_objects_array.push(<div className="well question"><SmallMultipleOptions questionNumber={question.id} question={question.question} options={question.options}/><NextButton skippable={is_required(question.id)} nextFunc={_nextFunction.bind(parent,is_required(question.id))}/></div>);
    break;
  case "small-unique-options":
      jsx_objects_array.push(<div className="well question"><SmallUniqueOptions questionNumber={question.id} question={question.question} options={question.options}/><NextButton skippable={is_required(question.id)} nextFunc={_nextFunction.bind(parent,is_required(question.id))}/></div>);
    break;
  case "small-multiple-image-options":
      jsx_objects_array.push(<div className="well question"><SmallMultipleImageOptions questionNumber={question.id} question={question.question} options={question.options}/><NextButton skippable={is_required(question.id)} nextFunc={_nextFunction.bind(parent,is_required(question.id))}/></div>);
  }
});
return jsx_objects_array;
}
