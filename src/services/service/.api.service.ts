import axios from 'axios';

const baseURL=import.meta.env.VITE_API_BASE_URL
const token =import.meta.env.VITE_API_TOKEN;

export const apiService = axios.create({
    baseURL: baseURL,
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});
