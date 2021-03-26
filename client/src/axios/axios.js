const axios = require('axios')

const instance = axios.create({
  // baseURL: 'http://localhost:3000'
  baseUrl: 'https://e-com-client-customer-puspa.herokuapp.com/'
})

export default instance
