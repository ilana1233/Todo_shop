import axios from 'axios';


const api = axios.create({
    baseURL:
    'http://localhost:127.0.0.1/api',
});

export default api;
