import axios from 'axios';
import { message } from 'antd';
import * as Config from './config';

// axios.defaults.headers.get['swagger'] = 'http://10.17.2.10:7001/';

// const head = { swagger: '123' };


/**
 * 公用get请求
 * @param url       接口地址
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const get = ({ url, data, headers }) =>
  axios.get(Config.MOCK_AUTH_ADMIN + url, { params: data }, { headers: { Accept: 'application/json' } })
  .then(res => res.data)
  .catch(error => {
    console.dir(error);
    // if (error.response.status !== 200) {
    //   message.warn(error.response.data.errmsg);
    // }
  });

/**
 * 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const post = ({ url, data, headers = { Accept: 'application/json' } }) =>
  axios.post(Config.MOCK_AUTH_ADMIN + url, data, headers)
  .then(res => res.data)
  .catch(error => {
    console.dir(error);
    // if (error.response.status !== 200) {
    //   message.warn(error.response.data.errmsg);
    // }
  });

/**
 * 公用put请求
 * @param url       接口地址
 * @param data      接口参数
 * @param errmsg       接口异常提示
 * @param headers   接口所需header配置
 */
export const put = ({ url, data, headers }) =>
  axios.put(url, data, headers)
  .then(res => res.data)
  .catch(error => {
    console.dir(error);
    // if (error.response.status !== 200) {
    //   message.warn(error.response.data.errmsg);
    // }
  })