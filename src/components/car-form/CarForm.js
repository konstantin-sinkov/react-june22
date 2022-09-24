import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';
import {carValidator} from "../../validators";

const CarForm = () => {
    const {register, handleSubmit, setValue, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(carValidator),
        mode: "all"
    }); //mode indicates when result obj will be sent to
    
    const submit = async (car) => {
        console.log(car);
    }
    
    return (
        <form onSubmit={handleSubmit(submit)} onChange={() => console.log(errors)}>
            <div>
                <input type="text" placeholder={'model'} {...register('model', {required: true})}/>
            </div>
            <input type="text" placeholder={'year'} {...register('year', /*{valueAsNumber: true}*/)}/>
            <input type="text" placeholder={'price'} {...register('price', /*{valueAsNumber: true}*/)}/>
            <input type="submit"/>
        </form>
    );
}

export {CarForm};
