import { ModalActionTypes } from "./modal.types";

const INITIAL_STATE = {
  modalIsOpen: false,
};
const ModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
      };
    case ModalActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
      };
    default:
      return state;
  }
};

export default ModalReducer;
