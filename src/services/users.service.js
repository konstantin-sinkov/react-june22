import {axiosService} from "./axios.service";
import {urls} from "../configs";

const usersService = {
    getUsers: () => axiosService.get(urls.users),
    getUserByID: (id) => axiosService.get(`${urls.users}/${id}`)
}

export {
    usersService
}
