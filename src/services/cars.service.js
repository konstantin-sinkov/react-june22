import {axiosService} from "./axios.service";
import {urls} from "../configs";


const carsService = {
    getAll: () => axiosService.get(urls.cars),
    addCar: (car) => axiosService.post(urls.cars, car),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    deleteCar: (id) => axiosService.delete(`${urls.cars}/${id}`),
    editCar: (id, {car}) => axiosService.patch(`${urls.cars}/${id}`, car)
}

export {
    carsService
}
