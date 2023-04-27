// 对axios进行二次封装

import axios from 'axios'

interface RequestConfig {
  baseURL: string
  method: string
  data?: Object
  params?: Object
}
export default {
  common: {
    method: 'GET',
    baseURL: 'http://localhost:3000',
    params: {},
    data: {},
  },
  $axios(options: RequestConfig) {
    options.baseURL = options.baseURL || this.common.baseURL
    options.params = options.params || this.common.params
    options.method = options.method || this.common.method
    options.data = options.data || this.common.data
    return axios(options).then(res => {
      let data = res.data.data
      return new Promise((res, rej) => {
        if (!data) return rej('请求失败')
        res(data)
      })
    })
  }
} 
