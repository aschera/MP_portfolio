import React, { Component } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import Home from './Home/Home';
import About from './About/About';
import Nav from './Components/Nav';


class App extends Component {

  componentDidMount() {}

  RunWhenCreated() {}

  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
  }

}

export default App;