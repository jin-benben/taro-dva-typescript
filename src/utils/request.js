import Taro from '@tarojs/taro'
export default function request(url, options) {
  let newOptions = {
    ...options.body,
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    data:options.body,
  };
  return Taro.request({url, ...newOptions})
}
