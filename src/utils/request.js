import Taro from '@tarojs/taro'

export default function request(url, options) {
 
  return Taro.request({
    url,
    data:options.body,
    headers: {
      'Content-Type': 'application/json',
    },
    method: options.method,
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (data.Status !== 200) {
        Taro.showToast({
          title: `${data.Message}~` || data.Status,
          icon: 'none',
          mask: true,
        });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  })
}
