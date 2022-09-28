import React from 'react';

import css from './Car.module.css';

const Car = ({car: {model, id, year, price}, deleteCarByID, updateCarByID}) => {
    const carDeleteOnclick = (id) => {
        deleteCarByID(id);
    }
    
    const carUpdateOnClick = (id) => {
        updateCarByID(id);
    }
    
    return (
        <div className={css.Car}>
            <p> {id}--{model} -- {year} year</p>
            <p>price -- {price}</p>
            <button onClick={() => carDeleteOnclick(id)}>Delete</button>
            <button onClick={() => carUpdateOnClick(id)}>Edit</button>
            <hr />
        </div>
    );
}

export {Car};
