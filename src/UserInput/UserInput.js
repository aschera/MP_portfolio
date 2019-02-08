import React from 'react';
import SortSelect from './SortSelect';
import './UserInput.css';

const UserInput = ( props ) => {
    function filterListHandler(e) {
        let filter = e.target.value;
        props.filterListHandler(filter);
      }
    
    return (
        <div className="UserInput">

            <SortSelect filterListHandler = {filterListHandler}/>
            
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
