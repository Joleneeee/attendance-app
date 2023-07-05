import axios from 'axios';

const request = axios.create({
    baseUrl: 'http://192.168.1.109:3000',
    timeout: 30000,
})

export default request;