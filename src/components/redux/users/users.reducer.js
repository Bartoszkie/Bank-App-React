import { UserActionTypes } from "./users.action.types";

const INITIAL_STATE = {
  loggiedIn: false,
  users: [],
  selectedUser: [],
  amout: 0,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case UserActionTypes.UPDATE_USER_AMOUNT:
      return {
        ...state,
        amout: action.payload,
      };
    case UserActionTypes.SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case UserActionTypes.USER_LOGIN:
      return {
        ...state,
        loggiedIn: true,
      };
    case UserActionTypes.USER_LOG_OUT:
      return {
        ...state,
        loggiedIn: false,
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
