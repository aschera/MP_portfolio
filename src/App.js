import React, { Component } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import "./App.css";

import Home from './Home/Home';
import About from './About/About';
import Awards from './Awards/Awards';
import Contact from './Contact/Contact';
import Education from './Education/Education';
import Publications from './Publications/Publications';
import Presentations from './Presentations/Presentations';

import Nav from './Components/Nav/Nav';


class App extends Component {

  componentDidMount() {}

  RunWhenCreated() {}

  render() {
    return (
      <BrowserRouter className="main">

      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="publications" element={<Publications />} />
          <Route path="presentations" element={<Presentations />} />
          <Route path="awards" element={<Awards />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

    </BrowserRouter>

    );
  }

}

export default App;