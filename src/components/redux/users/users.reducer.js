import { UserActionTypes } from "./users.action.types";

const INITIAL_STATE = {
  loggiedIn: false,
  users: [],
  selectedUser: [],
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case UserActionTypes.SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case UserActionTypes.USER_LOGIN:
      return {
        loggiedIn: true,
      };
    case UserActionTypes.POST_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default UserReducer;
