import http from './http'
export function login(d) {
    return http.post('/user/open/api/v2/user/login', Object.assign({ 
        way: 3,
        source: 1,
        tenantCode: process.env.VUE_APP_TENANTCODE
     }, d))
}
export function info() {
    return http.get(`/user/open/api/v1/user/current`)
}
export function routes() {
    return http.get(`/user/open/api/v1/permission/routes`)
}