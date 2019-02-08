import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';




class App extends Component {
  state = {
    input : '',
    list : [],
    movieInfo: 'No movie selected',
    filter: '',
    url : 'https://star-wars-api.herokuapp.com/films'
  }

  componentDidMount() {
    this.api();  
  }

  RunWhenCreated(){
  var ttt = document.getElementsByClassName('output-li');
    try {
      for (let i=0;i<ttt.length;i++){
        ttt[i].addEventListener('click', this.editUldDetails(this), false);
      }
    } catch (e) {
      console.log('error ' + e)
    }
	  
  }

  filterListHandler = (e) => {
    this.setState( { 
      filter : e,
      list: []
    } )
    console.log('filter the list', e)
  }

  listChangeHandler = (data) => {
    this.setState( { 
      list : data
    } )
    this.RunWhenCreated();
  }

  inputChangedHandler = (event) => {
    this.setState( {
      input: event.target.value,
      list: []
    } )
  }

  api() {
    let _this = this;
    fetch(this.state.url) 
    .then((resp) => resp.json())
    .then(function(data) {
      _this.listChangeHandler(data);
    })
    .catch(function(e) {
      console.log(e)
    });
  }

  render () {
    
    return (
      <div className="App">
        <h1>Star Wars movies</h1>
       
        <UserInput 
        InputName = {this.inputChangedHandler}
        input = {this.state.input} 
        filterListHandler = {this.filterListHandler} />

        <UserOutput 
        output = {this.state.list} 
        movieInfo = {this.state.movieInfo}
        createNode = {this.state.createNode}
        append = {this.state.append}
        />  

      </div>
    );
    
  }
}

export default App;