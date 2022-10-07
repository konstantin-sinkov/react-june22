import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postsService = {
    getPosts: () => axiosService.get(urls.posts)
}

export {
    postsService
}
