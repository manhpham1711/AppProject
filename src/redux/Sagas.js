/* eslint-disable prettier/prettier */
import {all} from 'redux-saga/effects';
import appSagas from './AppRedux/Sagas';
import googleFitSaga from './GoogleFitRedux/sagas';
import loginSagas from './LoginRedux/Sagas';
import profileSagas from './Profile/sagas';
import paymentSagas from './Payment/sagas';

export default function* root() {
  yield all([...appSagas, ...loginSagas,...googleFitSaga,...profileSagas,...paymentSagas]);
}
