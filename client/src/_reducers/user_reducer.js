import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  AUTH_USER,
} from "../_actions/types";

//previous state
export default function (pState = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      //sprated operator, loginSuccess -> from backend user data of json
      return { ...pState, loginSuccess: action.payload };

    case REGISTER_USER:
      return { ...pState, register: action.payload };

    case LOGOUT_USER:
      return { ...pState, logout: action.payload };

    case AUTH_USER:
      return { ...pState, userData: action.payload };

    default:
      return pState;
  }
}
