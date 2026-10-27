import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL
const token = import.meta.env.VITE_API_TOKEN


// Створюємо та експортуємо екземпляр axios для всього проекту
export const apiService = axios.create({
    baseURL: baseURL,
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});
