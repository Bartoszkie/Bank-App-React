import { LoginActionTypes } from "./login.types";

export const PostLoginStart = () => ({
  type: LoginActionTypes.LOGIN_START,
});

export const PostLoginSuccess = (response) => ({
  type: LoginActionTypes.LOGIN_SUCCESS,
  payload: response,
});

export const PostLoginError = (error) => ({
  type: LoginActionTypes.LOGIN_ERROR,
  payload: error,
});
