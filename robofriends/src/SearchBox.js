import React from 'react';


const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2' >
            <input type='search' placeholder='Type to search agents...' id='searchbox-input' onChange={searchChange}/> 
        </div>     
    );
}

// onChange => listen to the changes > execute searchChange function

export default SearchBox;