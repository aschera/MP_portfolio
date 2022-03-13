
import Hero from './Hero/Hero';
import News from './News/News';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import './Home.css';
import React from 'react';

function Home() {
  return (
    <div className="content">
      <Hero />
      <News />

      <Section3 />
      <Section4 />
    </div>
  );
}

export default Home;