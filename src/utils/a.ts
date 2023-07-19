import type { ResponseBody } from "@/api/typing";
import type { AxiosError, AxiosRequestConfig } from "axios";
import axios, { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";

export const REQUEST_TOKEN_KEY = "Access-Token";
const STORAGE_TOKEN_KEY = "STORAGE_TOKEN_KEY";

interface IAxios<D = any> {
  code?: number;
  data: D;
  message: string;
}

export interface AxiosResponse<T = any> extends IAxios {}

const request = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000,
});

export type RequestError = AxiosError<{
  message?: string;
  result?: any;
  errorMessage?: string;
}>;

const errorHandler = (error: RequestError): Promise<any> => {
  if (error.response) {
    const { data = {}, status, statusText } = error.response;

    if (status === 403) {
      ElMessage({
        type: "error",
        message: (data && data.message) || statusText,
      });
    }

    if (status === 401 && data.result && data.result.isLogin) {
      ElMessage({
        type: "error",
        message: "Authorization verification failed",
      });
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

const requestHandler = (
  config: AxiosRequestConfig
): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
  const savedToken = localStorage.getItem(STORAGE_TOKEN_KEY);

  if (savedToken) {
    config.headers = {
      ...config.headers,
      [REQUEST_TOKEN_KEY]: savedToken,
    };
  }

  return config;
};

request.interceptors.request.use(requestHandler, errorHandler);

const responseHandler = (
  response: AxiosResponse
): ResponseBody<any> | AxiosResponse<any> | Promise<any> | any => {
  return response.data;
};

request.interceptors.response.use(responseHandler, errorHandler);

export type { AxiosResponse };

export default request;
