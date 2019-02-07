import React from 'react';

import './UserInput.css';

const UserInput = ( props ) => {

    return (
        <div className="UserInput">

            <div className="Button-wrapper">
              <ReactExample name="fruit" value='Sort by ...' />
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

/* ------ button click ------ */
function filterListHandler() {
    /*
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } ) */
    console.log('filter the list')
  }

export const ReactExample = ( props) => (
    

        
            <label className="FilterButton">
            Pick your favorite flavor:
            <select value='' onChange={filterListHandler}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </label>
       

  )