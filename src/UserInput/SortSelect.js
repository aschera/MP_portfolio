import React from 'react';

const filterOptions = ['Episode', 'Year'];

const SortSelect = ( props) => (
    
    <form className="FilterButton" >
        <select 
        defaultValue="" 
        required value='' 
        onChange={props.filterListHandler}>
            <option value="" disabled>Sort by...</option>
            {
            filterOptions.map(function(item) {
                return <option key={this.props.activeFilter} value={this.props.activeFilter}>
                    {this.props.activeFilter}
                </option>
                ;
            })
            }
        </select>
    </form>

    

)

export default SortSelect;