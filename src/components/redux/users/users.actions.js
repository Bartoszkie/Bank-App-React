import { UserActionTypes } from "./users.action.types";

export const setUsersFromBackend = (users) => ({
  type: UserActionTypes.GET_USERS,
  payload: users,
});

export const userLoginAction = () => ({
  type: UserActionTypes.USER_LOGIN,
});

export const userSelectedUser = (user) => ({
  type: UserActionTypes.SELECT_USER,
  payload: user,
});

export const addUserAction = (user) => ({
  type: UserActionTypes.POST_USER,
  payload: user,
});
