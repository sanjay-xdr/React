import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID NBKm-Ws_nuqYssD6lWGgcdR4QevrwOO69JRcQ8qcdQo' 

    }
})