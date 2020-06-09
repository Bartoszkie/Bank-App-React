import React, { useState, useEffect } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { openModalAction } from "../../components/redux/modal/modal.actions";
import {
  userSelectedUser,
  setUsersFromBackend,
} from "../../components/redux/users/users.actions";
// import { getUsersFromBackend } from "../../components/redux/users/users.getUsers";
import ModalContainer from "../../components/modal/modal-container.component";
import UserForm from "../../components/user-form/user-form.component";
import UserFormAdd from "../../components/user-form-add/user-form.component";

import { Link } from "react-router-dom";

const UsersPage = ({
  changeModal,
  usersData,
  slecetUser,
  getUsers,
  setUsersToStore,
}) => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [users, setUsers] = useState({});

  const renderEditModal = () => {
    setEditModal(true);
    changeModal();
  };

  const renderAddModal = () => {
    setAddModal(true);
    changeModal();
  };

  const deleteUser = (username) => {
    axios
      .get("/users/", {
        headers: {
          Authorization: "Basic " + btoa("user" + ":" + "12345"),
        },
      })
      .then(() => {
        axios
          .delete(`/users/${username}`)
          .then((data) => console.log(data))
          .then(() => {
            axios
              .get("/users")
              .then((data) => {
                setUsersToStore(data);
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // setUsers(usersData);
    const getUserName = window.localStorage.getItem("access_token_username");
    const getUserPasswrod = window.localStorage.getItem(
      "access_token_password"
    );
    axios
      .get("/users/login", {
        headers: {
          Authorization: "Basic " + btoa(getUserName + ":" + getUserPasswrod),
        },
      })
      .then(() => {
        axios
          .get("/users")
          .then((data) => {
            setUsers(data);
            setUsersToStore(data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

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
          {usersData && usersData.data && usersData.data.length !== 0 ? (
            usersData.data.map((person, index) => (
              <div
                className="users__content__select"
                onClick={() => slecetUser(person)}
                key={index}
              >
                <div className="users__content__select__allusers">
                  <div className="users__content__select__allusers__usercontent">
                    <Link
                      to="/login/users/userpanel"
                      className="users__content__select__allusers__usercontent__user"
                    >
                      {index === 0 ? (
                        <p>PRACOWNIK: {person.username} </p>
                      ) : (
                        person.username
                      )}
                    </Link>
                    <div>
                      {index === 0 ? null : (
                        <React.Fragment>
                          <button
                            // style={{ marginRight: "10px" }}
                            onClick={() => deleteUser(person.username)}
                            className="button__delete"
                          >
                            Usuń
                          </button>
                          {/* <button onClick={renderEditModal}>Edytuj</button> */}
                        </React.Fragment>
                      )}
                    </div>
                  </div>{" "}
                </div>
              </div>
            ))
          ) : (
            <p>No users</p>
          )}

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
          <UserFormAdd />
        </ModalContainer>
      ) : null}
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeModal: () => dispatch(openModalAction()),
  slecetUser: (user) => dispatch(userSelectedUser(user)),
  setUsersToStore: (users) => dispatch(setUsersFromBackend(users)),
});

const mapStateToProps = (state) => ({
  usersData: state.userData.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
