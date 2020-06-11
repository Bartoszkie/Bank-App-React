import React, { useEffect, useState } from "react";
import { updateUserAmount } from "../redux/users/users.actions";
import { closeModalAction } from "../redux/modal/modal.actions";
import axios from "axios";
import { connect } from "react-redux";

const MakeTransactionBeetweenUsers = ({
  currentUsername,
  setAmount,
  usersData,
  changeModal,
  notifyError,
  notifySuccess,
}) => {
  const [users, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState([]);

  console.log(changeModal);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("/users/login", {
        headers: {
          Authorization: "Basic " + btoa("user" + ":" + "12345"),
        },
      })
      .then(() => {
        axios
          .post("/accounts/transfer", {
            amount: parseInt(data),
            fromUsername: currentUsername.selectedUser.username,
            toUsername: clicked,
          })
          .then((data) => console.log(data))
          .then(() => {
            axios
              .get(`/accounts/${usersData.selectedUser.username}/balance`)
              .then((data) => {
                setAmount(data.data);
                notifySuccess();
                changeModal();
              })
              .catch((error) => notifyError());
          })
          .catch((error) => notifyError());
      })
      .catch(() => notifyError());
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };

  useEffect(() => {
    axios
      .get("/users/login", {
        headers: {
          Authorization: "Basic " + btoa("user" + ":" + "12345"),
        },
      })
      .then(() => {
        axios
          .get("/users")
          .then((data) => setUser(data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

  const filterUserData = () => {
    if (users && users.data && users.data.length !== 0) {
      const filtered = users.data.filter(
        (user) =>
          user.username !== "user" &&
          user.username !== currentUsername.selectedUser.username
      );
      return filtered && filtered.length !== 0 ? (
        filtered.map((person, index) => (
          <div
            className="user-form__usertotransfer"
            key={index}
            onClick={() => setClicked(person.username)}
          >
            {person.username}
          </div>
        ))
      ) : (
        <p>No users</p>
      );
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input onChange={handleChange} name="amount" type="number" />
      <p
        style={{
          textAlign: "center",
          borderBottom: "1px solid black",
          paddingBottom: "1rem",
        }}
      >
        Wybierz odbiorcę:{" "}
      </p>
      {filterUserData()}
      <button className="user-form__submit">Wykonaj</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  currentUsername: state.userData,
  usersData: state.userData,
});

const mapDispatchToProps = (dispatch) => ({
  setAmount: (value) => dispatch(updateUserAmount(value)),
  changeModal: () => dispatch(closeModalAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeTransactionBeetweenUsers);
