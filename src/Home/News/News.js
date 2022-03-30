import React from 'react';

import Card from './Card/Card';
import {NewsData} from './NewsData';

import './News.css';

const News = ( props ) => {


    return (
      <div className='news-section'>

        <h3 className='section-title'>News</h3>

        <Card newsdata = {NewsData}/>

      </div>
    );
};

export default News;
