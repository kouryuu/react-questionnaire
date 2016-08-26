import React from 'react'
import ReactDOM from 'react-dom'
import Questionnaire from './questionnaire.js'
import {ERRORMSG,QUESTIONNAIRE_NAME,QUESTIONS_JSON} from '../configs/configs.js'
import Navbar from './ui-lib/navbar.js'

ReactDOM.render(<Navbar title={QUESTIONNAIRE_NAME} />,document.getElementById('nav'));
$.getJSON(QUESTIONS_JSON)
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
