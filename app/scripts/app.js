import React from 'react'
import ReactDOM from 'react-dom'
import Questionnaire from './questionnaire.js'
import {ERRORMSG} from '../configs/configs.js'


$.getJSON('/configs/questions.json')
.done(function(data){
ReactDOM.render(<div>
            <Questionnaire questions={data}/>
            </div>,document.getElementById('questions'));
})
.fail(function(jqXHR, textStatus, errorThrown) {
  ReactDOM.render(<div className="well">
              {ERRORMSG}
              </div>,document.getElementById('content'));
  console.log('failed to get questions.json ' + textStatus);
});
