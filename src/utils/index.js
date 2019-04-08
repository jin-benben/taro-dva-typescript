import Taro from '@tarojs/taro'

export const createAction = type => payload => ({ type, payload });
export const webpcapi = 'https://webpcapi.ylscm.com';
export const webcomapi = 'https://webcomapi.ylscm.com';
export function toastError(error,time=2000){//错误弹窗
  if(error){
    Taro.showToast({
      title: error.Message,
      icon: 'success',
      duration: time
    });
  }
 
}
export default {createAction,webpcapi,webcomapi,toastError}