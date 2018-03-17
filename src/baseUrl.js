import axios from 'axios'

const baseUrl = axios.create({
  baseURL:'http://localhost:3020/myporto'
})

export default baseUrl