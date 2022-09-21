import React, {useEffect, useState} from 'react';

import {carsService} from "../../services/cars.service";
import {CarForm, Car} from "../index";

const Cars = () => {
    const [cars, setCars] = useState([]);
    
    useEffect(() => {
        carsService.getAll()
            .then(({data}) => setCars(data));
        console.log(cars);
    }, []);
    
    return (
        <div>
            <CarForm />
            {
                cars.map(car => <Car car={car} key={car.id}/>)
            }
        </div>
    );
}

export {Cars};
