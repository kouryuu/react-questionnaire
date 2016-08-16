function Store(){
  let stored = [];

  return (function(questionNumber,value,action={}){

    if(questionNumber !== null){
      if(action.ElementType === "multiple"){
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
        }
      if(action.ElementType === "text"){
        stored[questionNumber] = value;
        }
       }
      return stored;

  });
}
const store = Store();
export {store}
