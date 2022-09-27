import { Types } from "../actions/types";
import getCookie from "../../Components/Hookes/Cookies/getCookie";

const jwt = getCookie("jwt-token");
const initialState = {
    isLogin : false,
    UserToken : (jwt)?jwt:null
} 

const UserReducer = (state = initialState,action) =>
{
    switch(action.type)
    {
        case Types.USER_LOGIN:
            return {
                ...state,
                isLogin : action.payload
            }
        case Types.SET_TOKEN :
            return {
                ...state,
                UserToken : action.payload
            }
        case Types.REMOVE_TOKEN :
            return {
                ...state,
                UserToken : {}
            }
        default : 
            return state;
    }
}

export default UserReducer;