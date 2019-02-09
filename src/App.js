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
    filterOptions : ['Sort by...', 'Episode', 'Year'],
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

    let currentFilter = this.state.filter;
    let result = [];
    let data = this.state.list;

    /* clear list in DOM*/
    document.getElementById('output').innerHTML = '';

    /* edit filter*/
    if(e === 'Sort by...') {
      this.api();
    }
    if(e === 'Year') {
      currentFilter = 'release_date';
      this.setState( {
        filter: currentFilter,
        list: []
      } )

      result = data.sort(function (a, b) {
        let current = a.fields[currentFilter].slice(0, 4);
        let next = b.fields[currentFilter].slice(0, 4);
        return current - next;
      });
    }

    if(e === 'Episode') {
      currentFilter = 'episode_id';
      this.setState( {
        filter: currentFilter,
        list: []
      } )

      result = data.sort(function (a, b) {
        return a.fields[currentFilter] - b.fields[currentFilter];
      });
    }

    this.setState( { 
      list : result
    } )

  }

  listChangeHandler = (data) => {
    var myarray = Array.prototype.slice.call(data, 1);
    
    this.setState( { 
      list : myarray
    } )
    this.RunWhenCreated();
  }

  inputChangedHandler = (event) => {

    let currentFilter = event.target.value;
    let data = this.state.list;
    let result = [];

    /* clear list in DOM*/
    document.getElementById('output').innerHTML = '';
    let query = document.getElementById('filter')
    query.innerHTML = ` ${currentFilter} <i class="fas fa-times"></i>`; 
    query.setAttribute("style", 
    "color:red; border: 1px solid blue; padding: 0.7em");
 
    for (let i = 0; i < data.length; i++) {
      var str = data[i].fields.title;
      var n = str.search(currentFilter);
      console.log(n);
      if(n !== -1) {
        result.push(data[i])
      }
    }
    console.log(result)

    this.setState( {
      input: currentFilter,
      list: result
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

        <div className="ActiveFilter">
          <span id="filter"></span>
        </div>
       
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