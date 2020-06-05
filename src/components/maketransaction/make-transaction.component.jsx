import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

const MakeTransactionBeetweenUsers = ({ currentUsername }) => {
  const [users, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("amount:", data);
    console.log("from: ", currentUsername.selectedUser.username);
    console.log("toUsername: ", clicked);

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
      {users.data &&
        users.data.length !== 0 &&
        users.data.map((item, index) => (
          <div key={index} onClick={() => setClicked(item.username)}>
            {item.username}
          </div>
        ))}
      <button className="user-form__submit">Wykonaj</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  currentUsername: state.userData,
});

export default connect(mapStateToProps)(MakeTransactionBeetweenUsers);
