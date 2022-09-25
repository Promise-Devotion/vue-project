import type { ResponseBody } from "@/api/typing";
import type { AxiosError, AxiosRequestConfig } from "axios";
import axios, { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
// import { localStorage } from "@/utils/local-storage";
// import { STORAGE_TOKEN_KEY } from "@/stores/mutation-type";

// 这里是用于设定请求后端时，所用的 Token KEY
// 可以根据自己的需要修改，常见的如 Access-Token，Authorization
// 需要注意的是，请尽量保证使用中横线`-` 来作为分隔符，
// 避免被 nginx 等负载均衡器丢弃了自定义的请求头
export const REQUEST_TOKEN_KEY = "Access-Token";
const STORAGE_TOKEN_KEY = "STORAGE_TOKEN_KEY";

interface IAxios<D = any> {
  code?: number;
  data: D;
  message: string;
}
export interface AxiosResponse<T = any> extends IAxios {}
// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: "http://127.0.0.1:5000", // process.env.VUE_APP_API_BASE_URL,
  timeout: 6000, // 请求超时时间
});

export type RequestError = AxiosError<{
  message?: string;
  result?: any;
  errorMessage?: string;
}>;

// 异常拦截处理器
const errorHandler = (error: RequestError): Promise<any> => {
  if (error.response) {
    const { data = {}, status, statusText } = error.response;
    // 403 无权限
    if (status === 403) {
      ElMessage({
        type: "error",
        message: (data && data.message) || statusText,
      });
    }
    // 401 未登录/未授权
    if (status === 401 && data.result && data.result.isLogin) {
      ElMessage({
        type: "error",
        message: "Authorization verification failed",
      });
      // 如果你需要直接跳转登录页面
      // location.replace(loginRoutePath)
    }
    if (status === 500) {
      ElMessage({
        type: "error",
        message: "Authorization verification failed",
      });
    }
  }
  return Promise.reject(error);
};

// 请求拦截器
const requestHandler = (
  config: AxiosRequestConfig
): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
  const savedToken = STORAGE_TOKEN_KEY;
  // 如果 token 存在
  // 让每个请求携带自定义 token, 请根据实际情况修改
  if (savedToken) {
    if (config && config.headers) {
      config.headers[REQUEST_TOKEN_KEY] = savedToken;
    }
  }
  return config;
};

// Add a request interceptor
request.interceptors.request.use(requestHandler, errorHandler);

// 响应拦截器
const responseHandler = (
  response: AxiosResponse
): ResponseBody<any> | AxiosResponse<any> | Promise<any> | any => {
  return response.data;
};

// Add a response interceptor
request.interceptors.response.use(responseHandler, errorHandler);

export type { AxiosResponse };

export default request;
