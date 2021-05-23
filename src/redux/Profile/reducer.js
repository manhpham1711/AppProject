import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { ProfileTypes } from './actions';

export const INITIAL_STATE = Immutable({
  isLoaing:false,
  data:null
});

export const SetUpProfile = (state) =>
  state.merge({ isLoaing: true});

export const SetUpProfileSuccess = (state,  data ) =>
  state.merge({
    data: data.res,
    });

const reducer = makeReducerCreator(INITIAL_STATE, {
    [ProfileTypes.SETUP_PROFILE]: SetUpProfile,
    [ProfileTypes.SETUP_PROFILE_SUCCESS]: SetUpProfileSuccess,
    });

export default reducer
