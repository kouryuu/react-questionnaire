import {QUESTIONNAIRE_NAME} from '../configs/configs.js'
/* This function returns another function bound to the stored array that both stores values depending
* on the ElementType or returns the stored array of values.
*/
function Store(){
  let stored = [QUESTIONNAIRE_NAME];

  return (function(questionNumber,value,action={}){
    if(questionNumber !== null && typeof(questionNumber) !== "undefined"){
      switch(action.ElementType){
      case "multiple":
        if(action.type === "add"){
          if(stored[questionNumber] === null || typeof(stored[questionNumber]) === 'undefined'){
            stored[questionNumber] = [value];
          }else{
          if(typeof(stored[questionNumber].find(function(myvalue){return myvalue === value;})) === 'undefined'){
            stored[questionNumber].push(value);
          }
          }
        }
        if(action.type === "remove" && stored[questionNumber] !== null && typeof(stored[questionNumber]) !== 'undefined'){
          stored[questionNumber] = stored[questionNumber].filter(function(myvalue){return myvalue !== value;});
        }
        break;
      case "text":
        stored[questionNumber] = value;
        break;
      case "unique":
        stored[questionNumber] = value;
        break;
       }
     }
      return stored;
  });
}
const store = Store();
export {store}
