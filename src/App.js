import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';




class App extends Component {
  state = {
    input : '',
    list : [],
    fetch: true,
    url : 'https://star-wars-api.herokuapp.com/films'
  }

  componentDidMount() {
    this.api();
  }



  /* ------ button click ------ */
  filterListHandler = () => {
    /*
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } ) */
    console.log('filter the list')
  }

  /* ------ update list state------ */
  listChangeHandler = (data) => {

    console.log('display list')
    console.log(data)
    this.setState( { 
      list : data,
      fetch: false
    } )
    
  }

  /* ------ user input state ------ */
  inputChangedHandler = (event) => {
   console.log(event.target.value)
    this.setState( {
      input: event.target.value,
      list: []
    } )
  }

  /* ------ API call ------ */
  api() {
    let _this = this;

    fetch(this.state.url) 
    .then((resp) => resp.json())
    .then(function(data) {
      console.log('data fetched')
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
        filterListHandler = {this.filterListHandler}
        input = {this.state.input} />

        <UserOutput 
        output = {this.state.list} 
        />  

      </div>
    );
    
  }
}



export default App;
