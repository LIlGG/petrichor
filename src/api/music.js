import request from '@/utils/request'
const MUSIC_BASE_URL = "https://api.i-meto.com"
export function music(query){
    return request({
        baseURL: MUSIC_BASE_URL,
        url: '/meting/api',
        method: 'get',
        params: query
    })
}