import axios from 'axios';





const authApi = axios.create({
    baseURL: process.env.VITE_API_URL
})



export default authApi;