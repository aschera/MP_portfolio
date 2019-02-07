import React from 'react';

import './UserInput.css';

const UserInput = ( props ) => {

    

    return (
        <div className="UserInput">

            <div className="Button-wrapper">
                <button 
                    className="FilterButton"
                    onClick={() => props.filterListHandler()}>
                    Sort by ...
                </button>
            </div>
                
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