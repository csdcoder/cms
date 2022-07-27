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

    // 使用拦截器
    // 1.从config中取出的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("拦截请求")
        if (this.showLoading) {
          this.loadingInstance = ElLoading.service({
            // lock: true,
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
        return res
      },
      (err) => {
        setTimeout(() => {
          this.loadingInstance?.close()
        }, 300)
        return err
      }
    )
  }

  // 自封装请求方法
  // <T>用来声明服务器返回的纯数据类型
  request<T=unknown>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {      
      if(config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if(config.showLoading === !DEFAULT_LOADING) {
        this.showLoading = config.showLoading
      }

      this.instance.request(config).then((res) => {
        // 单个请求对数据的处理
        if(config.interceptors?.responseInterceptor) {
          res = config.interceptors?.responseInterceptor(res)
        }
        
        this.showLoading = DEFAULT_LOADING   // 重置showLoading

        // console.log(res.data as T)   // 将data声明为<T>类型
        // return res as any as T
        resolve(res.data)
      }).catch(err => {
        this.showLoading = DEFAULT_LOADING   // 重置showLoading
        reject(err)
      })
    })
  }

  get<T=unknown>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "GET"})
  }
  post<T=unknown>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "POST"})
  }
  delete<T=unknown>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE"})
  }
  patch<T=unknown>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH"})
  }

}

export default HYRequest