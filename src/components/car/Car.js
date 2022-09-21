import React from 'react';

const Car = ({car}) => {
    return (
        <div>
            <p> {car.model} -- {car.year} year</p>
            <p>price -- {car.price}</p>
            <button>Delete</button>
            <button>Edit</button>
            <hr />
        </div>
    );
}

export {Car};
