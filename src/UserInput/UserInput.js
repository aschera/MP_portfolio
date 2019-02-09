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
                    <option value="" disabled>Sort by...</option>
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
            
            <div className="Input-wrapper">
                <label className="inp">
                        <input 
                        id="inp" 
                        type="text" 
                        onChange={props.InputName} 
                        placeholder={props.input}
                        />
                        <span className="label">Type to search</span>
                        <span className="border"></span>
                </label>
            </div>
        </div>
    )
};



export default UserInput;
