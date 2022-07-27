import axios from "axios"
import type { AxiosInstance } from "axios"
import type { HYRequestInterceptors, HYRequestConfig } from "./type"
import { ElLoading } from 'element-plus'


const DEFAULT_LOADING = false

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading: boolean
  loadingInstance?: any

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("拦截请求")
        if (this.showLoading) {
          this.loadingInstance = ElLoading.service({
            lock: true,
            text: "正在加载...",
            background: "rgba(0,0,0,0.5)"
          })
        }
        return config
      },
      (err) => { return err }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log("拦截响应")
        setTimeout(() => {
          this.loadingInstance?.close()
        }, 300)
        return res.data
      },
      (err) => {
        setTimeout(() => {
          this.loadingInstance?.close()
        }, 300)
        return err
      }
    )

  }

  // <T>用来声明服务器返回的纯数据类型
  request<T>(config: HYRequestConfig) {
      if(config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if(config.showLoading === !DEFAULT_LOADING) {
        this.showLoading = config.showLoading
      }

      this.instance.request(config).then((res) => {
        if(config.interceptors?.responseInterceptor) {
          res = config.interceptors?.responseInterceptor(res)
        }
        // console.log(res.data)
        this.showLoading = DEFAULT_LOADING   // 重置showLoading
        console.log(res as any as T)
        return res as any as T
      }).catch(err => {
        this.showLoading = DEFAULT_LOADING   // 重置showLoading
        return err
      })
  }
}

export default HYRequest