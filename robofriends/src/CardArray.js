import React, { Fragment } from 'react';
import Card from './Card';

const CardArray = ({ agents }) => {
    return (
        <Fragment>
            {
                agents.map((id, i) => { // Mapping (for Each) through all the agents 
                return <Card key={i} id={agents[i].id} name={agents[i].name} email={agents[i].email} />
                // child elements => key !!! (id didn't work as a unique key)
                })
            }   
        </Fragment>   
    );
}

export default CardArray;