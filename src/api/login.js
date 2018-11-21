import request from '@/utils/request';

export function Login(data) {
  return request.post('http://authtest.huizhaofang.com/api/user/login/', data);
}
