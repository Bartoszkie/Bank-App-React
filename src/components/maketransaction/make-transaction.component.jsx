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
}) => {
  const [users, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState([]);

  console.log(changeModal)

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
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      });
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
      {users.data &&
        users.data.length !== 0 &&
        users.data.map((item, index) => (
          <div
            className="user-form__usertotransfer"
            key={index}
            onClick={() => setClicked(item.username)}
          >
            {item.username}
          </div>
        ))}
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
