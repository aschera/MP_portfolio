
import Intro from './Intro/Intro';
import Teaching from './Teaching/Teaching';
import Research  from './Research/Research';
import Previous from './Previous/Previous';
import Education from './Education/Education';
import './About.css';
import React from 'react';

function About() {
  return (
    <div className='about'>
      <Intro />
      <Teaching />
      <Research />
      <Previous />
      <Education />
    </div>
  );
}

export default About;