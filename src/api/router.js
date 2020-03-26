import request from '@/utils/request'
/**
 * 获取文章具体内容或文章列表
 * @param {Object} query 
 */
export function article(query){
    return request({
        url: '/article/api',
        method: 'post',
        params: JSON.stringify(query)
    })
}