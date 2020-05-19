import http from './http'
export function login(args) {
	return http.post('/user/open/api/v2/user/login', args)
}

export function info() {
    return http.get(`/user/open/api/v1/user/current`)
}
export function routes() {
    return http.get(`/user/open/api/v1/permission/routes`)
}