import {put, call, takeLatest} from 'redux-saga/effects';
import {ProfileTypes}  from './actions';
import NavigationUtils from '../../navigation/Utils';
import AsyncStorage from '@react-native-community/async-storage';

export function* SetUpProfileSagas(){
      try {
      } catch (error) {
          
      }
}

export function* SetUpProfileSuccessSagas(data){
    try {
      console.log("sagas >>", data.res);
      yield AsyncStorage.setItem("User_profile",JSON.stringify(data.res))
      yield NavigationUtils.startRoot()
    } catch (error) {
        
    }
}

const googleFitSaga = () =>[
    takeLatest(ProfileTypes.SETUP_PROFILE, SetUpProfileSagas),
    takeLatest(ProfileTypes.SETUP_PROFILE_SUCCESS, SetUpProfileSuccessSagas),
];
export default googleFitSaga()
