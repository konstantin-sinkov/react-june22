import {axiosService} from "./axios.service";

import {urls} from "../configs";

export const services = {
    getTodos: () => axiosService.get(urls.todos).then(value => value.data),
    getAlbums: () => axiosService.get(urls.albums).then(value => value.data),
    getComments: () => axiosService.get(urls.comments).then(value => value.data),
    getPostById: (post_Id) => axiosService.get(`${urls.comments}?postId=${post_Id}`)
}
