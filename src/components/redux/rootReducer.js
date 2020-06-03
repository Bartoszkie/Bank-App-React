import { combineReducers } from "redux";

import ModalReducer from "./modal/modal.reducer";

const rootReducer = combineReducers({
  modalData: ModalReducer,
});

export default rootReducer;
