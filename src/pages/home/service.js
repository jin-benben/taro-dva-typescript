import request from '../../utils/request'
import {webpcapi} from '../../utils/index'

export async function getBranner () {
  return request(`${webpcapi}/WEB_PC0024/WEB_PC002401`, {
    method: 'POST',
    body: {
      method: 'post',
    },
  });
}

export async function getBrand () {
  return request(`${webpcapi}/WEB_PC0014/WEB_PC001402`, {
    method: 'POST',
    body: {
      method: 'post',
    },
  });
}

export async function getHotProduct () {
  return request(`${webpcapi}/WEB_PC0017/WEB_PC001601`, {
    method: 'POST',
    body: {
      method: 'post',
    },
  });
}

export async function getNewsList () {
  return request(`${webpcapi}/WEB_PC0003/WEB_PC000301`, {
    method: 'POST',
    body: {
      method: 'post',
      Content:{
        page:1,
        rows:4,
        sidx:"CreateDate",
        sord:"desc"
      }
    },
  });
}