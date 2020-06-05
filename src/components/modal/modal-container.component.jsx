import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { closeModalAction } from "../redux/modal/modal.actions";

const ModalContainer = ({
  modalIsOpen,
  changeModal,
  title,
  children,
  state,
  changeState,
}) => {
  const history = useHistory();

  const stopProp = (e) => {
    e.stopPropagation();
  };

  const passState = () => {
    changeModal();
    changeState(!state);
    history.push("/login/users");
  };

  return (
    <React.Fragment>
      {modalIsOpen ? (
        <div className="modal-container" onClick={passState}>
          <div className="modal-container__content" onClick={stopProp}>
            <h3 className="modal-container__content__h3">{title}</h3>
            {children}
            <button
              className="modal-container__content__close"
              onClick={passState}
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
