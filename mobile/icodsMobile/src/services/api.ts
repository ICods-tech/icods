import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.209.81.86:3333',
  
});

export default api;