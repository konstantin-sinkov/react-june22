import {axiosService} from "./axios.service";
import {urls} from "../configs";


const carsService = {
    getAll: () => axiosService.get(urls.cars),
    addCar: ({car}) => axiosService.post(urls.cars),
    // deleteCar: (id) => axiosService.delete(urls.cars),
    editCar: (id, {car}) => axiosService.patch(urls.cars)
}

export {
    carsService
}
