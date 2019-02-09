import React from 'react';

import './UserOutput.css';

const UserOutput = ( props ) => {

    const ul = document.getElementById('output');
    

    return (
        <div className="UserOutput">

           <ul id="output">
             {props.output.map(function(item) { 

                try {
                    let li = createNode(
                    'li', 
                    'output-li', 
                    item.id, 
                    item.fields.opening_crawl, 
                    item.fields.title,
                    item.fields.director
                    ), 
                    id = createNode('span', 'output-span'),
                    title = createNode('span', 'output-span'),
                    date = createNode('span', 'output-span');

                    id.innerHTML = ` Episode ${item.fields.episode_id} `; 
                    title.innerHTML = ` ${item.fields.title}  `; 
                    date.innerHTML = ` ${item.fields.release_date}`; 
                    
                    append(li, id);
                    append(li, title);
                    append(li, date);
                    append(ul, li);  

                    return true
                }
                catch(error) {
                    console.error(error);
                    return false
                }
               
                    
             })}
           </ul>

           <div className="description">
             <div id="description-text">{props.movieInfo}</div>
           </div>


        </div>
    )
};

function createNode(element, elClass, id, summary, title, director) {
    let el = document.createElement(element);
    el.classList.add(elClass);
    el.setAttribute("id", id);
    if(summary) {
        el.addEventListener("click", function(e) {
            editUldDetails(title, summary, director)
        }, false);
    }
    return el
}

function editUldDetails(t, s, d) {
    const summary = document.getElementById('description-text');
    summary.innerHTML = `<h2>${t}</h2> <p>${s}</p> <p>Directed by: ${d}</p>`; 
}

/* ------ create list of nodes ------ */
function append(parent, el) {
    return parent.appendChild(el); 
}

export default UserOutput;