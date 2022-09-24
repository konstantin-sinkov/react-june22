import axios from 'axios';

import {baseURL} from '../configs/index';

let axiosService = axios.create({baseURL});

export {axiosService};

