import React from 'react';

const SortSelect = ( props) => (
    <label className="FilterButton" >
        <select value='' onChange={props.filterListHandler}>
            <option value="">Sort by...</option>
            <option value="Episode">Episode</option>
            <option value="Year">Year</option>
        </select>
    </label>
)

export default SortSelect;