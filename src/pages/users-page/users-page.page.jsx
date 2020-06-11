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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";

const notifyError = () =>
  toast.error("Błąd operacji!", {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const notifySuccess = () =>
  toast.success("Operacja wykonana pomyślnie!", {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

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
  const [filteredUsers, setFilteredUsers] = useState([]);

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
                notifySuccess();
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => notifyError());
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

  const filterUserData = () => {
    if (usersData && usersData.data && usersData.data.length !== 0) {
      const filtered = usersData.data.filter(
        (user) => user.username !== "user"
      );
      return filtered && filtered.length !== 0 ? (
        filtered.map((person, index) => (
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
                  {person.username}
                </Link>
                <div>
                  <button
                    onClick={() => deleteUser(person.username)}
                    className="button__delete"
                  >
                    Usuń
                  </button>
                </div>
              </div>{" "}
            </div>
          </div>
        ))
      ) : (
        <p>No users</p>
      );
    }
  };

  // console.log("this is usersData: ", filterUserData());

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
          {filterUserData()}
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
          <UserFormAdd
            notifyError={notifyError}
            notifySuccess={notifySuccess}
          />
        </ModalContainer>
      ) : null}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
