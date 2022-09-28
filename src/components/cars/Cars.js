import React, {useEffect, useState} from 'react';

import {carsService} from "../../services/cars.service";
import {Car, CarForm} from "../index";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [carForUpdate, SetCarForUpdate] = useState(null);
    
    useEffect(() => {
        carsService.getAll()
            .then(({data}) => setCars(data));
        // console.log(cars);
    }, [cars]);
    
    const deleteCarByID = async (id) => {
        console.log(id);
        await carsService.deleteCar(id);
        //при delete сервер не завжди дає response, тому з масива cars машину потрібно видаляти вручну
        setCars(cars => {
            return cars.filter(car => id === car.id);
        });
    }
    
    const updateCarByID = async (id) => {
        const editedCar = await carsService.getById(id);
        // console.log(editedCar.data);
        SetCarForUpdate(editedCar);
    }
    
    return (
        <div>
            <CarForm setCars={setCars} carForUpdate={carForUpdate}/>
            {
                cars.map(car =>
                    <Car
                        car={car}
                        key={car.id}
                        deleteCarByID={deleteCarByID}
                        updateCarByID={updateCarByID}
                    />)
            }
        </div>
    );
}


export {Cars};
