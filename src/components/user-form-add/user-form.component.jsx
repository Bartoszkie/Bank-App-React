import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setUsersFromBackend } from "../redux/users/users.actions";
import { closeModalAction } from "../redux/modal/modal.actions";

const UserFormAdd = ({
  setUsersToStore,
  changeModal,
  notifySuccess,
  notifyError,
}) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

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
          .post("/users", data)
          .then((data) => {
            // history.push("/login/users");
          })
          .then(() => {
            axios
              .get("/users")
              .then((data) => {
                setUsersToStore(data);
              })
              .then(() => console.log("poszlo"))
              .catch((error) => setError(true));
          })
          .then(() => {
            notifySuccess();
            changeModal();
          })
          .catch((error) => {
            notifyError();
          });
      })
      .catch((error) => setError(true));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(data);

    setData({
      ...data,
      [name]: value,
    });
  };

  console.log("this is error: ", error);

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input onChange={handleChange} name="username" type="text" />
      <input onChange={handleChange} name="password" type="text" />
      <button className="user-form__submit">Dodaj</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeModal: () => dispatch(closeModalAction()),
  setUsersToStore: (users) => dispatch(setUsersFromBackend(users)),
});

export default connect(null, mapDispatchToProps)(UserFormAdd);
