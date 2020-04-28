import http from './http'
export function routes() {
    return http.get(`/user/open/api/v1/permission/routes`)
}