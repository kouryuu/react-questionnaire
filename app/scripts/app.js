import React from 'react'
import ReactDOM from 'react-dom'
import Questionnaire from './questionnaire.js'

let Errormsg = "Whoops! it looks like there is something wrong with the questions.";

$.getJSON('/configs/questions.json')
.done(function(data){
ReactDOM.render(<div>
            <Questionnaire questions={data}/>
            </div>,document.getElementById('content'));
})
.fail(function(jqXHR, textStatus, errorThrown) {
  ReactDOM.render(<div className="well">
              {Errormsg}
              </div>,document.getElementById('content'));
  console.log('failed to get questions.json ' + textStatus);
});
