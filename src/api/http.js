import axios from 'axios'
const http = axios.create({
    baseURL: '',
    timeout: 8000
})
http.interceptors.request.use((config) => {
    return config
})
http.interceptors.response.use((config) => {
    return config
})
export default http