import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3000/api',
    baseURL: process.env.VUE_APP_API_URL || 'http://localhost:3000/api'
});

export default api;
