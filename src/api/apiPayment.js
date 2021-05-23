/* eslint-disable prettier/prettier */
import http from './http';

export async function configPayment(data) {
  return http.post('test-payment.momo.vn/pay/app', data);
}
