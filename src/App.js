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
    filterOptions : [ 'Sort by...', 'Episode', 'Year'],
    url : 'https://swapi.dev/api/films/'
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
        let current = a[currentFilter].slice(0, 4);
        let next = b[currentFilter].slice(0, 4);
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
        return a[currentFilter] - b[currentFilter];
      });
    }

    this.setState( {
      list : result
    } )

  }

  listChangeHandler = (data) => {
    this.setState( {
      list : data.results
    } )
    this.RunWhenCreated();
  }

  inputChangedHandler = (event) => {

    let currentFilter = event.target.value;
    currentFilter = currentFilter.toLowerCase();

    let data = this.state.list;
    let result = [];

    /* clear list in DOM*/
    document.getElementById('output').innerHTML = '';

    /*
    let query = document.getElementById('filter')
    query.innerHTML = ` ${currentFilter} <i class="fas fa-times"></i>`;
    query.setAttribute("style",
    "color:red; border: 1px solid blue; padding: 0.7em");
    */

    for (let i = 0; i < data.length; i++) {
      var str = data[i].title;
      str = str.toLowerCase();
      var n = str.search(currentFilter);
      if(n !== -1) {
        result.push(data[i])
      }
      if(currentFilter === '') {
        this.api();
      }
    }

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

        <h1 className="h1 title">{this.state.title}</h1>

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