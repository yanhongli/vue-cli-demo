import axios from 'axios'
const http = axios.create({
    baseURL: '',
    timeout: 8000
})
http.interceptors.request.use((config) => {
    config.headers.token = localStorage.getItem('token')
    
    return config
})
http.interceptors.response.use((response) => {
    if(response.data.code === 200) {
        return response.data.data
    }
    return response
},
function(error) {
    return Promise.reject(error)
})
export default http