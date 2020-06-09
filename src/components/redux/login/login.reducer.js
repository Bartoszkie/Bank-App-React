import { LoginActionTypes } from "./login.types";

const INITIAL_STATE = {
  loading: false,
  response: [],
  error: null,
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LoginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        response: action.payload,
      };
    case LoginActionTypes.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default LoginReducer;
