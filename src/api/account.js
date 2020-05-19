import http from './http'
import qs from 'qs'
export function accountList(args) {
    let q = qs.stringify(args)
    return http.get(`/user/open/api/v1/user/list?${q}`)
}