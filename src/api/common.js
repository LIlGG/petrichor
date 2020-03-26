import request from '@/utils/request'
/**
 * 转发某个地址的请求
 * @param {Object} query 
 */
export function api(url, query, method = 'post'){
    return request({
        url: url,
        method: method,
        params: JSON.stringify(query)
    })
}
