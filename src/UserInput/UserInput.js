import React from 'react';
import './UserInput.css';

const UserInput = ( props ) => {

    function filterclick(e) {
        let eventValue = e.target.value;
        props.filterListHandler(eventValue);
    }

    return (
        <div className="UserInput">

            <form className="FilterButton" >
                <select 
                onChange={filterclick}>
                    
                    {
                    props.filterOptions.map(function(item) {
                        return <option key={item} value={item}>
                            {item}
                        </option>
                        ;
                    })
                    }
                </select>
            </form>
            
            <div class="search">
                <span class="fa fa-search"></span>
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
