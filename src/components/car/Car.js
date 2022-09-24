import React from 'react';

import css from './Car.module.css';

const Car = ({car}) => {
    return (
        <div className={css.Car}>
            <p> {car.model} -- {car.year} year</p>
            <p>price -- {car.price}</p>
            <button>Delete</button>
            <button>Edit</button>
            <hr />
        </div>
    );
}

export {Car};
