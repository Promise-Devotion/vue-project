import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

export type RequestError = AxiosError<{
  message?: string;
  code?: number;
  result?: any;
  errorMessage?: string;
}>;

interface ResponseConfig extends AxiosResponse {
  status: number;
  statusText: any;
  config: any;
}

interface HMRequestConfig extends InternalAxiosRequestConfig {
  headers: any;
}
const request: AxiosInstance = axios.create({
  baseURL: process.env.VITE_BASE_URL, //|| "http://127.0.0.1:5000/"
  timeout: 6000,
  headers: { "X-Custom-Header": "foobar" },
});

const requestHandler = (config: HMRequestConfig) => {
  if (config && config.headers) {
    config.headers = {
      ...config.headers,
    };
  }
  return config;
};

const errorHandler = (error: AxiosError) => {
  return Promise.reject(error);
};

const responseHandler = (config: ResponseConfig): Promise<ResponseConfig> => {
  const { data } = config;
  return Promise.resolve(data);
};
request.interceptors.request.use(requestHandler, errorHandler);
request.interceptors.response.use(responseHandler, errorHandler);

export default request;
