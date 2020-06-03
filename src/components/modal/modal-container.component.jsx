import React from "react";
import { connect } from "react-redux";
import { closeModalAction } from "../redux/modal/modal.actions";

const ModalContainer = ({ modalIsOpen, changeModal, title, children }) => {
  const stopProp = (e) => {
    e.stopPropagation();
  };

  return (
    <React.Fragment>
      {modalIsOpen ? (
        <div className="modal-container" onClick={changeModal}>
          <div className="modal-container__content" onClick={stopProp}>
            <h3 className="modal-container__content__h3">{title}</h3>
            {children}
            <button
              className="modal-container__content__close"
              onClick={changeModal}
            >
              Anuluj
            </button>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  modalIsOpen: state.modalData.modalIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  changeModal: () => dispatch(closeModalAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
