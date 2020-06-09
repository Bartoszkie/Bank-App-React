import React, { useEffect, useState } from "react";

import { closeModalAction } from "../redux/modal/modal.actions";
import { updateUserAmount } from "../redux/users/users.actions";
import axios from "axios";
import { connect } from "react-redux";

const MakeTransaction = ({
  wypłata,
  wpłata,
  user,
  setAmount,
  usersData,
  changeModal,
}) => {
  const [data, setData] = useState({});
  const [getData, setGetData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (wpłata === true && wypłata === false) {
      axios
        .get("/users/login", {
          headers: {
            Authorization: "Basic " + btoa("user" + ":" + "12345"),
          },
        })
        .then(() => {
          axios
            .post("/accounts/topUp", {
              amount: parseInt(data),
              toUsername: `${user}`,
            })
            .then((data) => console.log(data))
            .then(() => {
              axios
                .get(`/accounts/${usersData.selectedUser.username}/balance`)
                .then((data) => {
                  setAmount(data.data);
                })
                .then(() => {
                  changeModal();
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    } else if (wpłata === false && wypłata === true) {
      axios
        .get("/users/login", {
          headers: {
            Authorization: "Basic " + btoa("user" + ":" + "12345"),
          },
        })
        .then(() => {
          axios
            .post("/accounts/cashIn", {
              amount: parseInt(data),
              toUsername: `${user}`,
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
            .then(() => {
              changeModal();
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    }
  };

  const handleChange = (e) => {
    console.log(data);

    setData(e.target.value);
  };

  useEffect(() => {
    axios
      .get("/users")
      .then((data) => setGetData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input onChange={handleChange} name="amount" type="number" />
      <button className="user-form__submit">Wykonaj</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  usersData: state.userData,
});

const mapDispatchToProps = (dispatch) => ({
  setAmount: (value) => dispatch(updateUserAmount(value)),
  changeModal: () => dispatch(closeModalAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MakeTransaction);
