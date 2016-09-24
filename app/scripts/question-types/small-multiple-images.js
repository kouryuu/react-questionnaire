import React from 'react'
import {store} from '../store.js'
/* This React Component is used to render a small array of images that could have one or more answers
*/
export default class SmallMultipleImageOptions extends React.Component{
  constructor(){
    super();
  }

  render(){
    let _generateOptions = (function(options,_questionNumber){
      return(
        <div className="row">
          <div className="col-md-4"></div>
        <ul  className="col-md-4 options-ul">
        {options.map(function(option){
            return (
              <ImageOption questionNumber={_questionNumber} selected={option.selected} id={option.id} key={option.id} description={option.src}></Option>
            );
              }
                    )
        }
        </ul>
      </div>
      );
    });
    $('.options-ul li').removeClass('selected');
    $('.options-ul li').addClass('unselected');
    return(
      <div>
        <h1 className="text-center">{this.props.question}</h1>
        {_generateOptions(this.props.options,this.props.questionNumber)}
      </div>
    );
  }
}
class ImageOption extends React.Component{
  constructor(){
    super();
    this.state = {
      selected: false
    };
  }
  render(){
    return(
      <div className={(this.state.selected)?"selected":"unselected"} key={this.props.id}>
        <a href="#" className="select-link" onClick={this._addOption.bind(this)}>
          <img src={this.props.src} />
        </a>
      </div>);
    }
    _addOption(event){
      event.preventDefault();
      if(!this.state.selected){
      store(this.props.questionNumber,this.props.description,{ElementType:"multipleimg",type:"add"});
      }else{
      store(this.props.questionNumber,this.props.description,{ElementType:"multipleimg",type:"remove"});
      }
      this.setState({selected:!this.state.selected});

    }

}
