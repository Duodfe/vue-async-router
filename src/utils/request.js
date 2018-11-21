import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';
import store from '@/store';
import { getToken } from '@/utils/auth';

const service = axios.create({
  baseURL: '',
  timeout: 50000,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
  transformRequest: data => qs.stringify(data)
});

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers['X-Token'] = getToken();
    }

    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone interceptor
service.interceptors.response.use(response => {
  const res = response.data;

  if (+res.status.code !== 0) {
    Message({
      message: res.status.description,
      type: 'error',
      duration: 5 * 1000
    });
  } else {
    return res;
  }
});

export default service;
