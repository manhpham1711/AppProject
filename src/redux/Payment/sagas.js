/* eslint-disable prettier/prettier */
import {put, call, takeLatest} from 'redux-saga/effects';
import paymentAction, {PaymentTypes} from './actions';
import NavigationUtils from '../../navigation/Utils';
import RNMomosdk from 'react-native-momosdk';
import { Platform } from  'react-native';
import { configPayment } from '../../api/apiPayment';
import { RSA } from 'react-native-rsa-native';
import base64 from 'react-native-base64';
import formartData from '../../config/formartData';


// const RNMomosdkModule = NativeModules.RNMomosdk;
const publicKey = "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA0Sq91hV6abrihhZoqXq3jSt2lk/cW/HefVuG4dnF7wAV98rDu5tMSuqT+jKzlgfV8geePao57pKGQq18IGRDpEiC7LRqT88o2evnnU93KvnV6ZNFtANPxCIMmXCbFCMoQbnoI1OTDoIrYY6pdCbXxu31la5wlbE4T/eX8YUhim80wsHl2Am48q5vTbO5KNakdfLhbzZ7Q0/XM56A/UckSpNwRK0ewlC6GPvo3d/fYO5vtzLPgqfjJDzIkVstXKSAp/kP8FHOVBE3lXE7Y4vKARnYAAP6C1BybukI8BpBPRECqD6jaM7/nOkmLl2TYgBTXJ0R4X9mLou9c+26SU2m5y9B5jdBFpYV67/Y+tanV0FoZcM56qlFGqc3hyfz9cTW9FbDbh9pofo0eSrOvyM9ndjm0DOkiSxlISp5zFfANOxcX1kSNldlkGBiKp9eBGiccDoDNXKRVlRMBRDVTH2lYt15SJOCYEhlzqf+xzgByhTX0Khfvol2yVEvIXkIovJQhWJ648KFTD4oiY7lIKqHXQ9YqZoSIfdn+DLQ6FCuK1Y74Tn0UqTtXvRBCz1Kc6cko56quvWEKCesz03bQ1RuEUiqOiA0CQ3rUWIayG67UiW3/9gWiyB62RX9gpXjIy+PVjh5sSEMmU9YQ5Q45cYHtr/z2Ym3XWko5fQ8+Lsz2ocCAwEAAQ==";

export function* confirmPaymentUserSaga({jsonData}){
  console.log("open app momo and payment");

  console.log("money payment " + jsonData.amount);
  try {
    console.log("data_request_payment****** " + JSON.stringify(jsonData));

    if (Platform.OS === 'android'){
      let dataPayment = yield RNMomosdk.requestPayment(jsonData);
      console.log("data_request_payment " + JSON.stringify(dataPayment));
    
      let jsonString = {
        "partnerCode": "MOMOIQXQ20210323",
        "partnerRefId": "momoiqxq20210323",
        "amount": jsonData.amount,
        // chỗ này ạ %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  
        "hash": yield ConvertRSA(publicKey),
      }

      let dataConfirm = {
        appData: dataPayment.data,
        customerNumber: dataPayment.phonenumber,
        message: dataPayment.message,
        partnerCode: "MOMOIQXQ20210323",
        partnerRefId: dataPayment.orderId,
        // với chỗ này ạ **************************************************************************************
        hash: base64.encode(jsonString),
        description: 'Thanh toán nâng cấp gói App Health+',
        version: 2.0,
        payType: 3,
      }
      console.log("data json config +++++++ " + dataConfirm);
      yield confirmPaymentServerSaga(dataConfirm);
    }else{
      RNMomosdk.requestPayment(JSON.stringify(jsonData));
    }
  } catch (error) {
    console.error(error);
  }
}

//function đây ạ
function ConvertRSA(key){
  RSA.generateKeys(4096) // set key size
  .then(keys => {
      // console.log('4096 private:', keys.private); // the private key
      // console.log('4096 public:', keys.public); // the public key
      RSA.encrypt(key, keys.public)
      .then(encodeKey => {
        return encodeKey;
      });
  });

}



export function* confirmPaymentServerSaga(dataConfirm){
    try {
      console.log("confirm data payment with server momo");
      console.log(dataConfirm);
      const response = yield call(configPayment(ataConfirm));

      console.log("data response payment:  " + JSON.stringify(response));
    } catch (error) {
      console.log(error);
    }
}
const paymentSagas = () =>[
  takeLatest(PaymentTypes.CONFIRM_PAYMENT_USER, confirmPaymentUserSaga),
  takeLatest(PaymentTypes.CONFIRM_PAYMENT_SERVER, confirmPaymentServerSaga)
];

export default paymentSagas();

