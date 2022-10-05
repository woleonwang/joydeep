/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-02 12:01:28
 * @Author: wmy
 * @LastEditTime: 2022-06-26 17:33:24
 */
import axios, { AxiosRequestConfig } from 'axios';
import api, { ApiConfig } from './api';

const getUrl = (path: string, placeholder?: any): string => {
  let tmp: ApiConfig | string = api;
  path
    .split('.')
    .forEach((key) => (tmp = (tmp as ApiConfig)[key] as ApiConfig));
  if (placeholder) {
    Object.keys(placeholder).forEach((key) => {
      tmp = (tmp as unknown as string).replace(`:${key}`, placeholder[key]);
    });
  }
  const url = `/api${tmp}`;
  return url;
};

interface IParams {
  placeholder?: {
    [key: string]: string;
  };
  [key: string]: any;
}

const request = {
  get: async (path: string, params?: IParams) => {
    try {
      const { placeholder, ...restParam } = params || {};
      const response = await axios.get(getUrl(path, placeholder), {
        params: restParam,
        headers: {
          Authorization: localStorage.getItem('token') || '',
        },
      });
      return response.data;
    } catch (e: any) {
      return e.response?.data || {};
    }
  },
  post: async (path: string, data?: any): Promise<any> => {
    try {
      const { placeholder, ...restData } = data;
      const response = await axios.post(getUrl(path, placeholder), restData, {
        headers: {
          Authorization: localStorage.getItem('token') || '',
        },
      });
      return response.data;
    } catch (e: any) {
      return e.response?.data || {};
    }
  },
};

export default request;
