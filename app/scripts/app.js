import React from 'react'
import ReactDOM from 'react-dom'
import SmallText from './question-types/small-text-input.js'
import SmallMultipleOptions from './question-types/small-multiple-options.js'
let nextFunction = (function(event){
console.log(event);
})

let myoptions = [{id:1,description:"Red",selected:false},{id:2,description:"Orange",selected:false}];
ReactDOM.render(<div>
  <SmallMultipleOptions question="Choose your favorite colors" options={myoptions}/>
<SmallText question="How are you?" skippable={true} nextFunc={nextFunction.bind(this)}/>
</div>,document.getElementById('content'));
