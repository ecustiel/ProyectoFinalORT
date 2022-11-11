import axios from 'axios';


const authApi = axios.create({

    baseURL: process.env.REACT_APP_API_URL
});



export default authApi;