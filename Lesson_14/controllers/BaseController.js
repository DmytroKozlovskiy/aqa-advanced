
const axios = require('axios');
class BaseController {
  constructor() {
   this.axiosInstance = axios.create({
     baseURL: 'https://jsonplaceholder.typicode.com',
     validateStatus: () => true
  });
  }
}
module.exports =  BaseController;