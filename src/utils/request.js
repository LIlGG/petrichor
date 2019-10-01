import axios from 'axios'
import store from '@/store'


// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
    // 在进行请求前统一处理，比如添加token等
    if(config.method === 'POST') {
        config.data = {
            ...config.data,
            _t: Date.parse(new Date()) / 1000
        }
    } else if (config.method === 'get') {
        config.params = {
            ...config.params,
            _t: Date.parse(new Date()) / 1000
        }
    }
    return config
}, error => {
    //  统一处理请求错误
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        // 这里可以对响应的code做出判断
        return res;
    },

    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)


export default service