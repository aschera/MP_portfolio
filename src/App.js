import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';




class App extends Component {
  state = {
    input : '',
    list : [],
    movieInfo: 'No movie selected',
    url : 'https://star-wars-api.herokuapp.com/films'
  }



 componentDidMount() {
    this.api();
    
 }

 RunWhenCreated(){
	var ttt = document.getElementsByClassName('output-li');
	for (let i=0;i<ttt.length;i++){
		ttt[i].addEventListener('click', this.editUldDetails(this), false);
	}
}


 

  

  /* ------ update list state------ */
  listChangeHandler = (data) => {

    console.log('display list')
    console.log(data)
    this.setState( { 
      list : data
    } )
    this.RunWhenCreated();
    
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
        input = {this.state.input} />

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
