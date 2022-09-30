import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';
import {carValidator} from "../../validators";
import {carsService} from "../../services/cars.service";

const CarForm = ({setCars, carForUpdate}) => {
    const {register, handleSubmit, setValue, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(carValidator),
        mode: "all"
    }); //mode indicates when result obj will be sent to
    
    useEffect(() => {
        if (carForUpdate) {
            console.log(carForUpdate);
            setValue('model', carForUpdate.model, {shouldValidate: false});
            setValue('year', carForUpdate.year, {shouldValidate: false});
            setValue('price', carForUpdate.price, {shouldValidate: false});
        }
    }, [carForUpdate, setValue]);
    
    
    const submit = async (car) => {
        if (carForUpdate) {
            await carsService.editCar(carForUpdate.id, carForUpdate);
            // cars.findIndex(carForUpdate.id);
        } else {
            // carsService.addCar(car).then(console.log(car));
            await carsService.addCar(car);
            setCars(cars => [...cars, car]); //викликаємо сеттер і передаємо в нього старе значення cars + {car}, setState слідкує за Cars і перерендерить сторінку
            // console.log(data);
            }
    }
    
    return (
        <form onSubmit={handleSubmit(submit)} onChange={() => console.log(errors)}>
            <div>
                <input type="text" placeholder={'model'} {...register('model', {required: true})}/>
                {errors.model &&  <span>{errors.model.message}</span>}
            </div>
            <div>
                <input type="text" placeholder={'year'} {...register('year', /*{valueAsNumber: true}*/)}/>
                {/*{carForUpdate && setValue('')}*/}
                {errors.year &&  <span>{errors.year.message}</span>}
            </div>
            <div>
                <input type="text" placeholder={'price'} {...register('price', /*{valueAsNumber: true}*/)}/>
                {errors.price &&  <span>{errors.price.message}</span>}
            </div>
            <button onClick={submit}>{carForUpdate ? 'Save edited car' : 'Add new car'}</button>
        </form>
    );
}

export {CarForm};
