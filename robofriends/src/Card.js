// React => functions that render parameters which are given by properties and values
import React from 'react';

const Card = ({ name, email }) => { // { name, role } = props (<= destructured)
    return (
        <div className='cards grow shadow-5'>
                <img src={`https://robohash.org/${name}?150x150`} alt='Robot icon'/>
                <div className='cards-container'>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        </div>
    );
}

export default Card; // exports the Card.js
// Use <Fragment><Fragment/> for grouping w/o parent element tag (import React, {Fragment} from 'react';)