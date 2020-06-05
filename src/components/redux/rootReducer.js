import { combineReducers } from "redux";

import ModalReducer from "./modal/modal.reducer";
import UserReducer from "./users/users.reducer";

const rootReducer = combineReducers({
  modalData: ModalReducer,
  userData: UserReducer,
});

export default rootReducer;
