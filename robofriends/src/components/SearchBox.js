import React from 'react';


const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2' >
            <input type='search' placeholder='Type to search robots...' id='searchbox-input' onChange={searchChange}/> 
        </div>     
    );
}

export default SearchBox;