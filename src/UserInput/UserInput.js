import React from 'react';
import './UserInput.css';

const UserInput = ( props ) => {

    function filterclick(e) {
        let eventValue = e.target.value;
        props.filterListHandler(eventValue);
    }



    return (
        <ul className="UserInput">

            <nav className="FilterButton navigation" >
                <ul
                onChange={filterclick}
                id="menu"
                className='mainmenu'>
                    <li>Sort by...
                        <ul className="submenu">
                        {
                        props.filterOptions.map(function(item) {
                            return <li key={item} value={item}>
                               <a href='#'> {item} </a>
                            </li>
                            ;
                        })
                        }
                        </ul>
                    </li>  
                </ul>
            </nav>
            
            <div className="search">
                <span className="fa fa-search"></span>
                <input 
                        className="search"
                        id="inp" 
                        type="text" 
                        onChange={props.InputName} 
                        placeholder={props.input}
                        />
                        
            </div>
    
        </ul>
    )
};



export default UserInput;
