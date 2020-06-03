import React, { useState } from "react";

import { connect } from "react-redux";
import { openModalAction } from "../../components/redux/modal/modal.actions";
import ModalContainer from "../../components/modal/modal-container.component";
import UserForm from "../../components/user-form/user-form.component";

import { Link } from "react-router-dom";

const UsersPage = ({ changeModal }) => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [userData, setUserData] = useState({});

  const renderEditModal = () => {
    setEditModal(true);
    changeModal();
  };

  const renderAddModal = () => {
    setAddModal(true);
    changeModal();
  };

  return (
    <section className="users">
      <div className="users__content">
        <div className="users__content__headings">
          <p className="users__content__headings__heading">
            Wybierz użytkownika
          </p>
          <p className="users__content__headings__heading">Dodaj użytkownika</p>
        </div>

        <div className="users__content__details">
          <div className="users__content__select" onClick={renderEditModal}>
            <div className="users__content__select__allusers">
              <div className="users__content__select__allusers__usercontent">
                <span className="users__content__select__allusers__usercontent__user">
                  Emaunel Kak
                </span>
                <span className="users__content__select__allusers__usercontent__user">
                  Data: 12.12.2020
                </span>
              </div>{" "}
            </div>
          </div>

          <div className="users__content__add">
            <p className="users__content__add__heading">Dodaj użytkownika</p>
            <button
              className="users__content__add__add"
              onClick={renderAddModal}
            >
              +
            </button>
          </div>
        </div>
      </div>
      {editModal ? (
        <ModalContainer
          title="Edytuj użytkownika"
          state={editModal}
          changeState={setEditModal}
        >
          <UserForm />
        </ModalContainer>
      ) : null}
      {addModal ? (
        <ModalContainer
          state={addModal}
          changeState={setAddModal}
          title="Dodaj użytkownika"
        >
          <p>Dodawanie usera</p>
        </ModalContainer>
      ) : null}
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeModal: () => dispatch(openModalAction()),
});

export default connect(null, mapDispatchToProps)(UsersPage);
