import React from 'react';

const Card = ({ name, email }) => {
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

export default Card;
