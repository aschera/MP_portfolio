import React from 'react';
import './UserInput.css';

const UserInput = ( props ) => {

    function filterclick(e) {
        let eventValue = e.target.value;
        props.filterListHandler(eventValue);
    }

    return (
        <div className="UserInput">

            <div className="FilterButton" >
                        <select className="submenu" onChange={filterclick}>
                        {
                        props.filterOptions.map(function(item) {
                            return <option key={item} value={item}>
                               {item}
                            </option>
                            ;
                        })
                        }
                        </select>
                 
            </div>
            
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
    
        </div>
    )
};



export default UserInput;
