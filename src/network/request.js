import axios from 'axios'

export function request(config) {
    const instance = axios.create({
            baseURL: 'http://106.54.54.237:8000/api/mn',
            timeout: 5000
        })
        //axios拦截器
    instance.interceptors.request.use(config => {
        //console.log(config);
        return config
    }, err => {
        console.log(err);
    });

    //响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    });


    return instance(config)
}