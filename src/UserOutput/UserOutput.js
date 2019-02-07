import React from 'react';

import './UserOutput.css';

const UserOutput = ( props ) => {

    const ul = document.getElementById('output');

    return (
        <div className="UserOutput">

           <ul id="output">
             {props.output.map(function(item) { 

                    let li = createNode('li'), 
                        id = createNode('span'),
                        title = createNode('span'),
                        date = createNode('span');

                    id.innerHTML = ` Episode ${item.fields.episode_id} `; 
                    title.innerHTML = ` ${item.fields.title}  `; 
                    date.innerHTML = ` ${item.fields.release_date}`; 
                   
                    append(li, id);
                    append(li, title);
                    append(li, date);
                    append(ul, li);
             })}
           </ul>

           <div className="description">
             No movie selected
           </div>


        </div>
    )
};


    /* ------ create node ------ */
    function createNode(element) {
        return document.createElement(element); // Create the type of element you pass in the parameters
    }
    
    /* ------ create list of nodes ------ */
    function append(parent, el) {
        return parent.appendChild(el); // Append the second parameter(element) to the first one
    }

export default UserOutput;