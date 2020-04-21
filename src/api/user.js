import http from './http'
export function getUser(){
    return http.get('')
}