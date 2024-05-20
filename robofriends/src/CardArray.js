import React, { Fragment } from 'react';
import Card from './Card';

const CardArray = ({ robots }) => {
    return (
        <Fragment>
            {
                robots.map((id, i) => {
                return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
                })
            }   
        </Fragment>   
    );
}

export default CardArray;