import React, { useEffect, useState } from "react";

import axios from "axios";

const MakeTransaction = ({ wypłata, wpłata, user, makeTransactionModal }) => {
  const [data, setData] = useState({});
  const [getData, setGetData] = useState({});
  const [clickedUser, setClickedUser] = useState("");
  const [users, setUsers] = useState([]);

  console.log("to user:", user);
  console.log("to data:", parseInt(data));

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
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    } else if (
      wpłata === false &&
      wypłata === false &&
      makeTransactionModal === true
    ) {
      axios
        .get("/users/login", {
          headers: {
            Authorization: "Basic " + btoa("user" + ":" + "12345"),
          },
        })
        .then(() => {
          axios
            .post(`/accounts/transfer`, {
              amount: parseInt(data),
              fromUsername: `${user}`,
              toUsername: clickedUser,
            })
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    }
  };

  const renderListToSelect = () => {
    if (makeTransactionModal) {
      axios
        .get("/users/login", {
          headers: {
            Authorization: "Basic " + btoa("user" + ":" + "12345"),
          },
        })
        .then(() => {
          axios
            .get("/users")
            .then((data) => setUsers(data))
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
      {makeTransactionModal ? (
        <input onChange={handleChange} name="toUsername" type="number" />
      ) : null}
      <button className="user-form__submit">Wykonaj</button>
    </form>
  );
};

export default MakeTransaction;
