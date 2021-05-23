import { makeActionCreator, makeConstantCreator } from "../../utils/ReduxUtils";

export const ProfileTypes=makeConstantCreator(
    "SETUP_PROFILE",
    "SETUP_PROFILE_SUCCESS",   
)
const SetUpProfile=()=>makeActionCreator(ProfileTypes.SETUP_PROFILE)
const SetUpProfileSuccess=res=>makeActionCreator(ProfileTypes.SETUP_PROFILE_SUCCESS,{res})
export default{
    SetUpProfile,
    SetUpProfileSuccess,
}