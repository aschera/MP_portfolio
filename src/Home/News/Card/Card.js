import React from 'react';
import './Card.css';

const Card = ( props ) => {

    return (
      <div className='card-list'>
        <ul className="band">
          {props.newsdata.map((item) => (
            <li className="item" key={item.id}>

              <h4 className='list-title'>{item.title}</h4>

              <div>
                {item.list.map((i) => (
                  <div className="card" key={i.name}>

                    {i.published ? (
                      <p className="card-heading-name">
                        Published by: {i.published}
                        <br></br>
                      </p>
                    ) : null}

                    <p className="card-heading-date">{i.date}</p>

                    <p className="card-heading-title">{i.title}</p>

                    {i.author ? (
                    <p className="card-heading-author">
                      Written by: {i.author}
                    </p>
                    ) : null}

                    <p className="card-heading-subtitle">{i.text}</p>

                    <p className="card-heading-date">{i.amount}</p>
                    <br></br>
                    {i.link ? (
                      <a href={i.link} target="_blank" className="card-link">
                        link
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>

            </li>
          ))}
        </ul>
      </div>
    );
};

export default Card;
