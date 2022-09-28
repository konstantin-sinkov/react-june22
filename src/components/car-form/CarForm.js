import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';
import {carValidator} from "../../validators";
import {carsService} from "../../services/cars.service";

const CarForm = ({setCars}) => {
    const {register, handleSubmit, setValue, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(carValidator),
        mode: "all"
    }); //mode indicates when result obj will be sent to
    
    const submit = async (car) => {
        // carsService.addCar(car).then(console.log(car));
        const {data} = await carsService.addCar(car);
        setCars(cars => [...cars, car]); //викликаємо сеттер і передаємо в нього старе значення cars + {car}, setState слідкує за Cars і перерендерить сторінку
        // console.log(data);
    }
    
    return (
        <form onSubmit={handleSubmit(submit)} onChange={() => console.log(errors)}>
            <div>
                <input type="text" placeholder={'model'} {...register('model', {required: true})}/>
                {errors.model &&  <span>{errors.model.message}</span>}
            </div>
            <div>
                <input type="text" placeholder={'year'} {...register('year', /*{valueAsNumber: true}*/)}/>
                {errors.year &&  <span>{errors.year.message}</span>}
            </div>
            <div>
                <input type="text" placeholder={'price'} {...register('price', /*{valueAsNumber: true}*/)}/>
                {errors.price &&  <span>{errors.price.message}</span>}
            </div>
            <input type="submit"/>
        </form>
    );
}

export {CarForm};
