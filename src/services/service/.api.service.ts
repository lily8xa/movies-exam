import axios from 'axios';

const baseURL='https://api.themoviedb.org'
const token ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTFkMTliMWY4YWJmZGFhZDk2MGYxOTgzMThlNTEyNyIsIm5iZiI6MTc5MzA5NDIwNC43MzgsInN1YiI6IjZhZTA3MjNjZDRkYzVjZWI2Y2U2ZTYxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QERHxZGR9qhjEBROePnVMO81oZwcT4rXVeZlYaEGRoE\n'


export const apiService = axios.create({
    baseURL: baseURL,
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});
