import Vue from 'vue'
import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.use(vueAxios, axios)
    //创建实例

const service = axios.create({
    timeout: 30000, //请求时间超出
    withCredentials: true, //是否跨站点访问控制请求
})

//request拦截
service.interceptors.request.use(config => {
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

//response拦截器
service.interceptors.response.use(
    response => response,
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export default service