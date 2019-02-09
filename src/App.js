import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';




class App extends Component {
  state = {
    title: 'Star wars movies',
    input : '',
    list : [],
    movieInfo: 'No movie selected',
    filter: '',
    filterOptions : ['Episode', 'Year'],
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

    let currentFilter = '';
    let data = this.state.list;

    var sortable = [];
    for (var item in data) {
        sortable.push([item, data[item]]);
    }

    let result = [];

    /* clear list in DOM*/
    //document.getElementById('output').innerHTML = '';

    /* edit filter*/
    if(e === 'Year') {
      currentFilter = 'release_date';
      console.log(currentFilter )

    }
    else if(e === 'Episode') {
      currentFilter = 'episode_id';
      console.log(currentFilter )
    }

   
     

      console.log(sortable[0][1].fields[currentFilter])

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

        <h1>{this.state.title}</h1>

        active filter: {this.state.filter}
       
        <UserInput 
        InputName         = {this.inputChangedHandler}
        input             = {this.state.input} 
        filterOptions     = {this.state.filterOptions}
        filterListHandler = {this.filterListHandler} />

        <UserOutput 
        output            = {this.state.list} 
        movieInfo         = {this.state.movieInfo}
        createNode        = {this.state.createNode}
        append            = {this.state.append}
        />  

      </div>
    );
    
  }
}

export default App;