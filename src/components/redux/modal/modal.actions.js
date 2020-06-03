import { ModalActionTypes } from "./modal.types";

export const openModalAction = () => ({
  type: ModalActionTypes.OPEN_MODAL,
});

export const closeModalAction = () => ({
  type: ModalActionTypes.CLOSE_MODAL,
});
